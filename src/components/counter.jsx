import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 6,
        tags: []
    }
    render() {
        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Invrement</button>
                <ul>
                    {this.state.tags.length ===0 && "there is no data to display"}
                    {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
                </ul>
            </>
        );
    }

    // tagsList = () => {return this.state.tags.length === 0 ? "there is no data to display" : this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    formatCount = () => {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? 'warning' : 'primary');
        return classes;
    }
}

export default Counter;