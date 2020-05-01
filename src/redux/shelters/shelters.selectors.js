import { createSelector } from 'reselect'

export const selectShelters = (state) => state.shelters
export const selectOne = (state) => state.shelters.shelter

// vsetky shelters
export const selectCurrentShelters = createSelector([ selectShelters ], (shelters) => shelters.shelters)

// detail shelter
export const selectOneShelter = createSelector([ selectOne ], (shelter) => shelter)
