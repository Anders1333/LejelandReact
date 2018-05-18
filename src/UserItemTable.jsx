import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink, WithRouter } from "react-router-dom";



class UserItemTable extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            dataFromServer: [],
            facade: this.props.facade,
            userId: this.props.userid
            }

            
   
        
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
        
    }


   
  
    componentDidMount(){
       this.props.facade.fetchItemsFromUserId(this.state.userId)
        .then(res=> {
            this.setState({dataFromServer: res})})
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
                    <td>{data.status}</td>
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
           
    
            <div className="container-fluid">
            <h1>Lejeland</h1>
            <NavLink exact to="/">Home</NavLink>
            <hr/>
       
            
            
            
            <div>

                <table id="myTable" className="table">
                    {this.head()}
                    {this.body()}
                </table>

            </div>
            </div>
           
            
        )
    }
}


export default UserItemTable;