import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop, buyMobile,cacheUser,fetchAllData_Users, fetchUserResponse} from '../../Redux/Actions/Actions'
import { actionType } from '../../Redux/Actions/ActionType'
import { axiosRequestCall, validate } from '../FormPages/BiodataServices'
import { BASE_URL } from '../FormPages/ListAllData'
import './style.css'


const mapStateToProps = (state) => {

  return {

    noOfLaptops: state.laptopsStore.noOfLaptops,
    noOfMobiles: state.mobilesStore.noOfMobiles,
    noOfUsers: state.usersStore.users
  }
}
export class Shop extends Component {

  componentDidMount() {
    this.LoadCacheUser();
  }

  componentWillReceiveProps() {
    this.LoadCacheUser();
  }


  LoadCacheUser = () =>  {
    var self = this;
    axiosRequestCall(null, BASE_URL+"/getAllUsers", "GET", function (result) {
        if (result.data.data !== null && result.data.data.length !== 0) {
            console.log("AJAX Call Output : axiosRequestCall " + JSON.stringify(result.data.data));
            self.props.cacheUserStore(result.data.data,actionType.STORE_CACHE_USER);
        }
    },
        function (error) {
            console.log("--failed axios " + BASE_URL + "/getAllUsers" + " :: " + error);
        });
  }

  bioDataPage() {
    this.props.history.push(`/employees`);
}

  render() {
    return (
      <div>
        <h1 className="title">Welcome to VShop</h1>&nbsp;<button  onClick={() => this.bioDataPage()}>To BioData</button>
        <div className="items">
          <div className="item">
            <p>Dell Inspiron Laptop</p>
            <p>Available: {this.props.noOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>BUY</button>
          </div>
          <div className="item">
            <p>Redme Note 7</p>
            <p>Available: {this.props.noOfMobiles}</p>
            <button onClick={this.props.buyMobile}>BUY</button>
          </div>
          <div className="item">
            <p>Get users data</p>
            <p>Count:{this.props.noOfUsers.length}</p>
            <button onClick={this.props.fetchUsers}>Call API</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
   // fetchUsers: () => dispatch(fetchAllData_Users()),
    fetchUsers: () => dispatch(fetchUserResponse()), // for Sagaa
    cacheUserStore:(data)=>dispatch(cacheUser(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)