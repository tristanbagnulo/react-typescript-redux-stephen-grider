// An enum is an object that will carry strings of all the possible
// a possible action types (not typescript type, just the type). Video 33. Adding an Action Type Enum.
// This is useful for reducing errors if you need to use these strings elsewhere and stops repetition
// of the strings in the interfaces above and the reducer below.

export enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}