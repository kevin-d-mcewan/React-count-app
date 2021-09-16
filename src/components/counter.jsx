import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    styles = {
        fontWeight: 10,
        fontSize: 25,
    };

    handleIncrement = (product) => {
        //product is just the 'event' from DOM Events where we normally pass an 'e' which we could have done.
        console.log(product);
        this.setState({ count: this.state.count + 1})

    }

    // This is one way to pass arguements into handleIcrement but we are just using an extra function to wrap the
    // 'handleIncrement function' better to just pass it inline to the <button onClick().
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // };

    
    
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleIncrement(this.product)}
                    className="btn btn-secondary btn-sm">
                    Increment</button>
          </div>
                
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;