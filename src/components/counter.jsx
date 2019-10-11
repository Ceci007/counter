import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    render() { 
        return ( 
            <div>
                <span className = {this.getBadgeClasses()}>{this.formatValue()}</span>
                <button onClick = {() => this.props.onIncrement(this.props.counter)}
                className = "btn m-2 btn-secondary btn-sm">
                    +
                </button>
                <button onClick = {() => this.props.onDecrement(this.props.counter)}
                className = "btn m-2 btn-secondary btn-sm">
                    -
                </button>
                <button onClick = {() => this.props.onDelete(this.props.counter.id)}
                className = "btn m-2 btn-danger btn-sm">
                    Delete
                </button>
            </div>
         );
    }

    getBadgeClasses() {
        let classes = "btn zero m-2 btn-";

        if(this.props.counter.value === 0)
        {
            classes += "warning";
        }
        else if(this.props.counter.value > 0)
        {
            classes += "primary";
        }
        else
        {
            classes += "warning";
        }

        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? '0' : value;
    }
}
 
export default Counter;