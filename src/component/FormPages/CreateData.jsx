import React, { Component } from 'react'
import { axiosRequestCall, validate } from './BiodataServices';
import { BASE_URL, URLs } from './ListAllData';

class CreateData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            autoId: 0,
            name: '',
            age: '',
            mobile: '',
            adrs: '',
            statee: '',
            country: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            var self = this;
            this.setState({ autoId: this.state.id });
            axiosRequestCall(null, BASE_URL + URLs.VIEW + "/" + this.state.id, "GET", function (result) {
                if (validate(result.data)) {
                    console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data));
                    let dataRes = result.data;
                    self.setState({
                        autoId: dataRes.autoId, name: dataRes.name, age: dataRes.age,
                        mobile: dataRes.mobile, adrs: dataRes.adrs, statee: dataRes.state, country: dataRes.country
                    });
                }
            },
                function (error) {
                    console.log("--failed axios " + BASE_URL + URLs.FETCHALL + " :: " + error);
                });
        }
    }



    getTitle = () => {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Data</h3>
        } else {
            return <h3 className="text-center">Update Data</h3>
        }
    }

    inputHandler = (event, nameAttr) => {
        if (nameAttr === "name")
            this.setState({ name: event.target.value });
        else if (nameAttr === "mobile")
            this.setState({ mobile: event.target.value });
        else if (nameAttr === "age")
            this.setState({ age: event.target.value });
        else if (nameAttr === "adrs")
            this.setState({ adrs: event.target.value });
        else if (nameAttr === "statee")
            this.setState({ statee: event.target.value });
        else if (nameAttr === "country")
            this.setState({ country: event.target.value });
    };


    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            name: this.state.name, mobile: this.state.mobile, age: this.state.age,
            adrs: this.state.adrs, state: this.state.statee, country: this.state.country, autoId: this.state.autoId
        };
        console.log('Data ::  => ' + JSON.stringify(employee));
        var self = this;

        if (self.state.id === '_add') {
            axiosRequestCall(employee, BASE_URL + URLs.CREATE, "POST", function (result) {
                if (validate(result.data.data)) {
                    console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data));
                    alert("SUCCESS SAVE");
                    self.props.history.push('/employees');
                }
            },
                function (error) {
                    console.log("--failed axios " + BASE_URL + URLs.CREATE + " :: " + error);
                    alert("FAILED WHILE SAVING" + error);
                });
        } else {
            axiosRequestCall(employee, BASE_URL + URLs.UPDATE + "/" + this.state.id, "PUT", function (result) {
                if (validate(result.data.data)) {
                    console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data));
                    alert("SUCCESS UPDATE");
                    self.props.history.push('/employees');
                }
            },
                function (error) {
                    console.log("--failed axios " + BASE_URL + URLs.CREATE + " :: " + error);
                    alert("FAILED WHILE UPDATING" + error);
                });
        }
    }

    cancel = () => {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="Name" className="form-control"
                                            value={this.state.name} onChange={(e) => { this.inputHandler(e, "name"); }} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile: </label>
                                        <input placeholder="Mobile" name="Mobile" className="form-control"
                                            value={this.state.mobile} onChange={(e) => { this.inputHandler(e, "mobile"); }} />
                                    </div>
                                    <div className="form-group">
                                        <label>Age: </label>
                                        <input placeholder="age" name="age" className="form-control"
                                            value={this.state.age} onChange={(e) => { this.inputHandler(e, "age"); }} />
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="adrs" className="form-control"
                                            value={this.state.adrs} onChange={(e) => { this.inputHandler(e, "adrs"); }} />
                                    </div>

                                    <div className="form-group">
                                        <label>State: </label>
                                        <input placeholder="state" name="state" className="form-control"
                                            value={this.state.statee} onChange={(e) => { this.inputHandler(e, "statee"); }} />
                                    </div>

                                    <div className="form-group">
                                        <label>Country: </label>
                                        <input placeholder="Country" name="Country" className="form-control"
                                            value={this.state.country} onChange={(e) => { this.inputHandler(e, "country"); }} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger reset" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateData