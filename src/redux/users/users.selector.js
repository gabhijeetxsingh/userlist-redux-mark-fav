import { createSelector } from 'reselect';


const selectUsers = state => {
	console.log(state)
	return state.users
};

const selectedUsers = state => {
	return state.users.selectedUsers
};

// const selectedUsersSelector = state => state.selectUsersIds;

// const getUsers = (users, selectUsersIds) => {
// 	const selectUsers = _.filter(
// 		users,
// 		user => _.includes(selectUsersIds, user )
// 	)
// }

export const selectUsersList = createSelector(
	[selectUsers],
	users => users.users,
);

export const selectedUsersList = createSelector(
	[selectedUsers],
	users => {
		console.log(users)
		return users
	},
);
