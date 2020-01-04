import { combineReducers } from 'redux'
import sheltersReducer from './shelters/shelters.reducer'


export default combineReducers({
    // ! Vsetky reducery sa tu budu spajat
    // animals: animalReducer,
    shelters: sheltersReducer
})