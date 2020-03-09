import { createSelector } from "reselect";

export const selectUsers = state => state.users;

export const selectLoggedUser = createSelector(
	[selectUsers],
	loggedUser => loggedUser.loggedUser
);

// export const selectOneAnimal = createSelector(
//     [selectOne],
//     (animal) => animal
// )

// export const selectIsAnimalFetching = createSelector(
//     [selectAnimals],
//     animals => animals.isFetching
// )
