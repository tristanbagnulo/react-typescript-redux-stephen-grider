import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// `createStore` creates a redux store that holds the entire state
// tree of your app and it requires a reducer function as argument 1,
// it then needs an "initialState" as it's 2nd. The middleware functions
// in the 3rd argument just improve the store a bit (look it up when 
// you need to).


export const store = createStore(reducers, {}, applyMiddleware(thunk));