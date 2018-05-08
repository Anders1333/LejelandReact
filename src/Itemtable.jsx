import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom';


class Itemtable extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            dataFromServer: [],
            species: []
        }
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
    }

    head() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Payment</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>
                
            </thead>
        )
    }

    body(){
      
            return (
                <tr>
                    <td>Tony hawks old skateboard</td>
                    <td>A pristine skateboard from my good friend Tony!</td>
                    <td>Deposit : 100$   Monthly: 50$</td>
                    <td>Chicago</td>
                    <td>Available</td>
                </tr>
           
            );
        }

 

    render(){
        return(
            <div>
                <table class="table">
                    {this.head()}
                    {this.body()}
                </table>
            
            </div>
        )
    }
}

export default Itemtable;