// Term: Reducer
// Tutorial Reference: Started on Video 28. Reducer Setup
// Definition: Takes an 'action' and the previous 'state'
// of the application and returns a new 'state'.

import { ActionType } from '../action-types';
import { Action } from '../actions';

//This interface enforces TypeScript typing for the reducer's
//returned value.
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (
    state: RepositoriesState, 
    action: Action /*Specifies action types for input Video 30 - Typing an Action*/
): RepositoriesState /*Specifies return type - Video 29. Annotating the Return Type*/ => { 
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, /*now this return is checked for type - Video 29.*/data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: true, error: action.payload, data: []}
        default:
            return state;
    }
};

export default reducer