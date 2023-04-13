import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';

// The `combineReducers` function converts an object whose values are different
// reducing functions into a single reducing function that you can then
// pass to the store. In other words, it allows multiple reducers to be
// combined into a single reducer function. 

// Why do we have this? Redux apps usually have multiple pieces of state and
// each piece of state is often managed by its own reducer function. 
// When you use `combineReducers` you pass in an object where each key
// corresponds to a slice of state and the value is the reducer function
// that manages that slice of state.

// In the below example there is a 1 key, "repositories" and one value,
// "repositoriesReducer" which is the reducer. Later we can place thus
// `reducers` root reduer into a createStore() function that updates 
// all states.

// The order of operations now is as follows;
// 1. Dispatch an action (see action-creators/intex.ts)
// 2. The `reducer` function below will receive the action
//    object and then pass it on toe the appropriate reducer
//    based on its key (here its `repositoriesReducer`).
// 3. the repositoriesReducer` function will return a new state object
//    which will be used to update the overall state of the store.
const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// `ReturnType<typeof function>` is a helper in TypeScript that
// returns us the type of the function. Ultimately, we are exporting
// the type from the reducer function.
export type RootState = ReturnType<typeof reducers>;