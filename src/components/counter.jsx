import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontWeight: 10,
        fontSize: 25,
    }
    
    render() {
        return (
            <div>
                
                <span style={this.styles}className="d-flex badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <br></br>
                <br></br>
                <img src={this.state.imageUrl} alt="" />;
          </div>
                
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;