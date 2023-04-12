import { ActionType } from '../action-types';

//Below are the interfaces for actions. These are used to
//enforce TypeScript typing standards are upheld. 

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action = 
    SearchRepositoriesAction | 
    SearchRepositoriesSuccessAction | 
    SearchRepositoriesErrorAction;
