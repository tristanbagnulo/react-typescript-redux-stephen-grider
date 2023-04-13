import { useState } from 'react';
// `useDispatch` is used to manually call action creators
import { useActions } from '../hooks/useActions';

import { useSelector } from 'react-redux';

// `useSelector` is a hook allows a React component (like this one) to 
// subscribe to a specific slice of the Redux store state and receive updates 
// whenever it changes. From video 47. "Selecting State".
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions(); 
    // To use `useSelector` it is passed a whole function that takes the entire
    // redux store state as its argument and returns a specific slice of state 
    // that you want to select. Here we are after only the `repositories` that 
    // sit within state. Now, whenever the `repositories` slice of state changes,
    // this `RepositoriesList.tsx` component will be re-rendered with the updated
    // state.

    // const state = useSelector((state) => state);
    // console.log(state);
    

    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );  

    // HTML Event Types - `onSubmit` is an event and has a type that you need to
    // pass to it. To get that type (`React.FormEvent<HTMLFormElement>`) you
    // need to hover your mouse over `onSubmit` after `<form ` below and copy
    // it. This one was a little different though, you needed to remove "Handler"
    // after "FormEvent" to get rid of the error. Remember, "event" in the event,
    // so it shouldn't be named "handler" which is what 
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Below prevents a page refresh being triggered
        // at each click of the "Search" button.
        event.preventDefault();

        searchRepositories(term);

    }
    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && 
        data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesList;
 