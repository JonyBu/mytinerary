import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import citiesReducer from './reducers/citiesReducer';
import itinerariesReducer from './reducers/itinerariesReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    citiesReducer,
    itinerariesReducer
});

const store = createStore(
    reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;