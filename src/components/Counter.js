import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(1);
    const increment =()=> setCounter(counter+1)
    const decrement =()=> setCounter(counter-1)
    return (
        <div>
            <div>
                <strong>Counter:</strong> {counter}
            </div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;