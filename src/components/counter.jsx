import React, { Component } from "react";

// This can also be written as the next line with 'export default Counter;' line being moved
// export default class Counter extends Component {}    either way works 
class Counter extends Component {
    state = {
        count: 1
    };
    
    render() {
        // Technically is 'React.createElement('div') here but dont need to type it here done automatically
        return (
            <React.Fragment>
                <span>{this.props.count}</span>
                <button>Increment</button>
            </React.Fragment>
                
        );
    }
}

export default Counter;