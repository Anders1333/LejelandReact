import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';



class Itemtable extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            dataFromServer: [],
            facade: this.props.facade,
            category: this.props.category
            }

            
   
        
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
        this.state = {q : null};
    }

   
    
    componentDidMount(){
      
        this.props.facade.fetchItemsFromCategory('Bikes')
        .then(res=> {
            this.setState({dataFromServer: res.results})})
        .catch(err => console.log(err));

   
        
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

    body() {
        console.log(this.state.dataFromServer)
        if(this.state.dataFromServer===undefined){
            return null;
        }
        const map1 = this.state.dataFromServer.map((data, index) => {

            return (
                <tr key={index}>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.payment}</td>
                    <td>{data.location}</td>
                    <td>{data.available}</td>
                </tr>
            )
        })

        return (
            <tbody>
                {map1}
            </tbody>
        );
    }



    render() {
        return (
            <div>

                <table id="myTable" className="table">
                    {this.head()}
                    {this.body()}
                </table>

            </div>
        )
    }
}


export default Itemtable;