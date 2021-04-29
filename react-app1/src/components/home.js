import React, { Component } from 'react';
import map from '../assets/80-cool-grey.png'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container-fluid" style={{maxWidth:'1500px', textAlign:'center'}}>
            <div className="row">
                <div className="col-md-4">
                   <div className="card">
                       <div className="card-body">
                        
                       </div>
                   </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <img src={map}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Home;