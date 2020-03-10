import { usersActionTypes } from './users.types';
export const addUsersList = users => {
	return {
		type: usersActionTypes.USERS_LIST,
		payload: users,
	};
};
export const addSelectedUsersList = user => {
	return {
		type: usersActionTypes.SELECTED_USERS_LIST,
		payload: user,
	};
};
