import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// This whole file is from Video 49. "Creating a Typed Selector". It's 
// basically the boilerplate code that react-redux documentation tells you to
// implement. It's entire purpose is to inform TypeScript what type the the
// applicaiton's State is. In this case, state is being returned by the `useSelect`
// function in the `RepositoriesList.tsx` file. Without this, Typescript doesn't know
// what the state should look like.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;