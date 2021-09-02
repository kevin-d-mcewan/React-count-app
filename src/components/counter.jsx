import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3'],
    };

    styles = {
        fontWeight: 10,
        fontSize: 25,
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = () => {
        // This doesn't work bc React doesn't realize the state is being
        // incremented so needs to be done a different way
        
        // this.state.count++;
        this.setState({ count: this.state.count + 1})

    }
    
    render() {
        return (
            <div>
                {/* <span style={this.styles}className="d-flex badge badge-primary m-2">{this.formatCount()}</span> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <br></br>
                <img src={this.state.imageUrl} alt="" />;
                <br></br>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
                <div>
                    {/* Right below would be 2nd option if didnt want to do 'renderTags() method */}
                    {/* { this.state.tags.length === 0 && 'Please create a new tag!'} */}
                    {this.renderTags()}
                </div>
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