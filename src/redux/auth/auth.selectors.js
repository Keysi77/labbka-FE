import { createSelector } from "reselect";

export const selectUsers = state => state.users;

export const selectLoggedUser = createSelector(
	[selectUsers],
	loggedUser => loggedUser.loggedUser
);
