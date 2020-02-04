import  { createSelector } from 'reselect'

// vyselektuje len usera zo state
export const selectAnimals = state => state.animals
export const selectOne = state => state.animals.animal

export const selectAllAnimals = createSelector(
    [selectAnimals],
    (animals) => animals.animals.animals
)

export const selectOneAnimal = createSelector(
    [selectOne],
    (animal) => animal
)