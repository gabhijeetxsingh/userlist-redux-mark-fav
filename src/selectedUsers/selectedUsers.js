import React from 'react';
import { connect } from 'react-redux';
import {
	selectUsersList, selectedUsersList
} from '../redux/users/users.selector';

const selectedUsersListCom = (props) => {

    const { selectedUsers, users} = props;


    let selectedUsersList = selectedUsers.map(function(id) {
    return users[id]
    });

    return ( <div className="row d-flex justify-content-center mt-4">

    {selectedUsersList.map((user, i) => {
      return(
        <div className="card col-md-2 m-1" style={{width : "10rem"}} key={i}>
            <img className="card-img-top" src={user.picture.large} alt={user.name.first} style={{width : "100%", height : "10vw", objectFit: "cover"}}/>
            <div className="card-body m-3">
                <h5 className="card-title">{user.name.first}</h5>
                <p className="card-text">{user.email}</p>
                <button  data-userid={i} className="form-check-input" id="exampleCheck1">Add to fav</button>
            </div>
        </div>
    )})}
 </div>)
}


const mapStateToProps = state => {
	return {
		users: selectUsersList(state),
		selectedUsers: selectedUsersList(state),
	};
};

export default connect(mapStateToProps)(selectedUsersListCom);
