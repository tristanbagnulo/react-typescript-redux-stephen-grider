//Term: Action Creator
//Tutorial Reference: Started at Video 36 - Adding Action Creators
//Definition: Returns an "Action" object. An "Action" is a plain JavaScript 
//object that describes the change that should be made to the
//application state. The "Action Creator" helps create "Actions" in a
//standardized structure and format. This improves code maintainability
//expecially as the app grows in size and complexity. For example, you could
//add another .ts file to the `action-creators` directory that creates its own
//set of "Actions" and title it `repositoryActionCreator`. 

import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    //`dispatch` below is how we manually dispatch actions
    //into the redux store and get those processes by a reducer. 
    return async (dispatch: Dispatch<Action>) => {
        //Below is the function call that dispatches the action
        //of type 'search_repositories'
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get('https://api.npms.io/v2/search', {
                params: {
                    q: term
                }
            });

            const names = data.results.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (err: any) {
            //If anything in the request goes wrong...
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                //All errors ('err') in JavaScript have a `message` property.
                payload: err.message
            })
        }
    };
};