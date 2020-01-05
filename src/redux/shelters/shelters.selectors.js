import  { createSelector } from 'reselect'

// vyselektuje len usera zo state
export const selectShelters = state => state.shelters

export const selectCurrentShelters = createSelector(
    [selectShelters],
    (shelters) => shelters.shelters
)