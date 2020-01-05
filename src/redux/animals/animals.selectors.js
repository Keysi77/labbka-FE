import  { createSelector } from 'reselect'

// vyselektuje len usera zo state
export const selectAnimals = state => state.animals

export const selectAllAnimals = createSelector(
    [selectAnimals],
    (animals) => animals.animals
)