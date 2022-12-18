import React, { Component } from 'react';
import { axiosRequestCall, validate } from './BiodataServices';
import './formStyle.css';

export const BASE_URL = "http://localhost:8082/restApp/BioDataServices";
export const URLs = { FETCHALL: "/getAllBio", CREATE: "/saveBioData", UPDATE: "/updateBioData", DELETE: "/deleteBioData", VIEW: "/getbyId" }
class ListAllData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }


    componentDidMount() {
        var self = this;
        axiosRequestCall(null, BASE_URL + URLs.FETCHALL, "GET", function (result) {
            if (result.data.data !== null && result.data.data.length !== 0) {
                console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data.data));
                self.setState({ employees: result.data.data });
            }
        },
            function (error) {
                console.log("--failed axios " + BASE_URL + URLs.FETCHALL + " :: " + error);
            });
    }


    deleteEmployee(id) {
        console.log("Delete Data" + id);
        var self = this;
        axiosRequestCall(null, BASE_URL + URLs.DELETE + "/" + id, "DELETE", function (result) {
            if (validate(result.data)) {
                alert("SUCCESS  DELETED ....");
                console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data));
                self.setState({ employees: self.state.employees.filter(employee => employee.id !== id) });
                window.location.reload();
            }
        },
            function (error) {
                alert("FAILED WHILE DELETING ....");
                console.log("--failed axios " + BASE_URL + URLs.DELETE + " :: " + error);
            });


    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }
    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }



    render() {
        return (
            <div>
                <h2 className="text-center">All DATA</h2>
                <div className="row">
                <div  className="col-md-6"></div>
                <div className="col-md-6">
                    <button style={{float:'right'}} className="btn btn-primary" onClick={this.addEmployee} > CREATE </button></div>
                </div>
                <br></br>
                <div className="row" style={{ overflowX: 'auto' }}>
                    <table>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>MOBILE</th>
                                <th>ADDRESS</th>
                                <th>AGE</th>
                                <th>STATE</th>
                                <th>COUNTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.autoId}>
                                            <td> {employee.name} </td>
                                            <td> {employee.mobile}</td>
                                            <td> {employee.age}</td>
                                            <td> {employee.adrs}</td>
                                            <td> {employee.state}</td>
                                            <td> {employee.country}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.autoId)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.autoId)} className="btn btn-danger">Delete </button>
                                                {/*   <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.autoId)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListAllData