import { usersActionTypes } from './users.types';
const initialState = {
	users: [],
	selectedUsers: [],
};

const UsersReducer = (state = initialState, action) => {

	switch (action.type) {
		case usersActionTypes.USERS_LIST:
			return {
				...state,
				users: action.payload,
			};
		case usersActionTypes.SELECTED_USERS_LIST:
			let arr = [...state.selectedUsers, ...action.payload]
			return {
				...state,
				selectedUsers:  [...new Set(arr)],
			};
		default:
			return state;
	}
};
export default UsersReducer;
