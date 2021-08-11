import React, {Component} from 'react';

class CounterClass extends Component {
    state = {
        counter:11
    }
    increment() {
        this.setState(state => ({counter: this.state.counter+1}))
    }
    decrement() {
        this.setState(state => ({counter: this.state.counter-1}))
    }
    render() {
        return (
            <div>
                <div>
                    <strong>Counter Class:</strong> {this.state.counter}
                </div>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        );
    }
}

export default CounterClass;