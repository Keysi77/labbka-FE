import  { createSelector } from 'reselect'

export const selectShelters = state => state.shelters

export const selectCurrentShelters = createSelector(
    [selectShelters],
    (shelters) => shelters.shelters
)