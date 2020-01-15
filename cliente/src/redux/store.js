import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import citiesReducer from './reducers/citiesReducer';
import itinerariesReducer from './reducers/itinerariesReducer';
import activitiesReducer from './reducers/activitiesReducer';
import detailsReducer from './reducers/detailsReducer';
import loginReducer from './reducers/loginReducer';



const reducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer,
    detailsReducer,
    loginReducer,
});

const store = createStore(
    reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


export default store;