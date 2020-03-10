import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addUsersList, addSelectedUsersList } from './redux/users/users.action';
import {
	selectUsersList, selectedUsersList
} from './redux/users/users.selector';
import SelectedUsersComponent from "./selectedUsers/selectedUsers"

const axios = require('axios');

const listOfUsers = async () => {
  try {
    let {data} =await axios('https://randomuser.me/api/?results=50')
    return data
  } catch (error) {
    console.error(error);
  }
}

class App extends Component {
  
  constructor() {
    super()
    this.state = {
        users : []
    }
  }

	onClink = e => {
    const {addSelectedUsersList} = this.props;
    addSelectedUsersList([e.target.dataset.userid])
  };
  
  componentDidMount() {

    const {addUsersList} = this.props;

    listOfUsers().then(data=>{
      
        if(data.error) {
            console.log(data.error)
        }
        else {
            this.setState({users : data.results})
            addUsersList([...data.results])
        }
    })
  }

  renderUsers =(users) => {
       return ( 
         <div>
       <SelectedUsersComponent/>
       <hr/>
       <div className="row d-flex justify-content-center mt-4">

        {users.map((user, i) => {
          return(
            <div className="card col-md-2 m-1" style={{width : "10rem"}} key={i}>
                <img className="card-img-top" src={user.picture.large} alt={user.name.first} style={{width : "100%", height : "10vw", objectFit: "cover"}}/>
                <div className="card-body m-3">
                    <h5 className="card-title">{user.name.first}</h5>
                    <p className="card-text">{user.email}</p>
                    <button onClick={this.onClink} data-userid={i} className="form-check-input" id="exampleCheck1">Add to fav</button>
                </div>
            </div>
        )})}
    </div></div>)
  }
  
  render () {

    const {users} = this.state;
    return this.renderUsers(users);
  }
}

const mapStateToProps = state => {
	return {
		users: selectUsersList(state),
		selectedUsers: selectedUsersList(state),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addUsersList: users => dispatch(addUsersList(users)),
		addSelectedUsersList: userId => dispatch(addSelectedUsersList(userId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
