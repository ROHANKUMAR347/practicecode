import "./styles.css";

import React, { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case `Increment`:
            return { count: state.count + 1 };
        case `Decrement`:
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>count:{state.count}</h1>
            <button onClick={() => dispatch({ type: `Increment` })}>Increment</button>
            <button onClick={() => dispatch({ type: `Decrement` })}>Decrement</button>
        </div>
    );
}
