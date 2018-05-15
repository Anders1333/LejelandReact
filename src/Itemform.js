import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink, WithRouter } from "react-router-dom";



class Itemform extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' ,
                       categoryChoice: '',
                       options: [
                        { value: "Cars", label: 'Cars' },
                        { value: "Bikes", label: 'Bikes' },
                        { value: "Motorcycles", label: 'Motorcycles' },
                        { value: "Scooters", label: 'Scooters' },
                        { value: "Skating", label: 'Skating' },
                        { value: "Boats", label: 'Boats' },
                        { value: "Couches", label: 'Couches' },
                        { value: "Tables", label: 'Tables' },
                        { value: "Chairs", label: 'Chairs' },
                        { value: "Carpets", label: 'Carpets' },
                        { value: "Bathroom", label: 'Bathroom' },
                        { value: "Bedroom", label: 'Bedroom' },
                        { value: "Kids", label: 'Kids' },
                        { value: "Driving", label: 'Driving' },
                        { value: "Cooking", label: 'Cooking' },
                        { value: "Cleaning", label: 'Cleaning' },
                        { value: "Gardening", label: 'Gardening' },
                        { value: "Babysitting", label: 'Babysitting' },
                        { value: "Entertainment", label: 'Entertainment' },
                        { value: "Lamps", label: 'Lamps' },
                        { value: "Ovens", label: 'Ovens' },
                        { value: "Refrigerators", label: 'Refrigerators' },
                        { value: "TVs", label: 'TVs' },
                        { value: "Soundsystem", label: 'Soundsystems' },
                        { value: "Toys", label: 'Toys' },
                        { value: "Computers", label: 'Computers' },
                        { value: "Consoles", label: 'Consoles' }
                    ]
                      
                       
    
    
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.handleChange.bind(this);
    }

   

    




    onChange(event) {
        this.setState({ categoryChoice: event.value });

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
    }
  

   

    render() {

        const categoryOptions = this.state.options.map((data,index) =>
            <option value= {data.value}>{data.label}</option>
            )
            
        return (
            <div id= "registerItem">


                <h1>Register new item:</h1>
                <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                    <label>
                        Title:
                    <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    </li>


                    <li>
                    <label>
                        Category:
                    
                        <select onChange={this.onChange} value={this.state.categoryChoice}>
                        {categoryOptions}
                        </select>            

                        
                   
                           
                    </label>
                    </li>

                    <li>
                     <label>
                        Description:
                    <input type="text" value={this.state.description} onChange={this.handleChange} />
                    </label>
                    </li>

                    <li>
                     <label>
                        Payment:
                    <input type="text" value={this.state.payment} onChange={this.handleChange} />
                    </label>
                    </li>

                    <li>
                     <label>
                        Location:
                    <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    </li>


                    <input type="submit" value="Submit" />
                    </ul>
                </form>

            </div>

        )

       
    }

  




}
export default Itemform;