import React, { Component } from 'react';

class Dashboard extends Component {
    state = { 
        dash: 1,
        imageurl: "https://picsum.photos/200",
        tags: ['tag1','tag2','tag3']
     };
 
    render() { 

        let classes = "badge m-2 badge-";
        classes += this.state.dash === 0 ? "warning" : "primary";

        return (
        <div>
            <img src={this.state.imageurl} alt=""/>
            <span className={classes}>{this.state.dash}</span>
            <button className="btn btn-primary btn-sm">Sents</button>
            <ul>
                {this.state.tags.map(tag => <li>{tag}</li>)}
            </ul>
        </div>);
    }
}
 
export default Dashboard;