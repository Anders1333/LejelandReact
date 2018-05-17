import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink, WithRouter } from "react-router-dom";
import Select from './Select';
import DataFacade from './DataFacade'



class Itemform extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                       userid: '1',
                       title: '',
                       description: '',
                       categoryChoice: '',
                       description: '',
                       payment: '',
                       location: '',

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
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event){
        const target = event.target;
        const value = target.value;
        
        this.setState({
            categoryChoice: value
          });
        console.log(this.state)
    }

   
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state)
      }
      
    
    

   

    handleSubmit(event) {
    event.preventDefault(event);

    const item = { 
    userid: this.state.userid,
    title: this.state.title,
    category: this.state,
    description: this.state.description,
    payment: this.state.payment,
    location: this.state.location
    }

    DataFacade.createNewItem(item);

    }
  

   

    render() {

        console.log("this is the title " + this.state.title)
           


        const optionsmapped = this.state.options.map((data,index)=> 
        <option key = {index} value = {data.value}>{data.label}</option> 
        )
            
        return (
            <div id= "registerItem">


                <h1>Register new item:</h1>
                <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                    <label>
                        Title:
                    <input name='title' type='text' value={this.state.title} onChange={this.handleChange}/>
                    </label>
                    </li>


                    <li>
                    <label>
                        Category:
                        <select name='categoryChoice' value= {this.state.categoryChoice} onChange={this.onChange}>
                        <option value = '' selectedvalue = '1'>Choose Category</option>
                        {optionsmapped}
                        </select>
                    </label>
                    </li>

                    <li>
                     <label>
                        Description:
                    <input name='description' type="text" value={this.state.description} onChange={this.handleChange} />
                    </label>
                    </li>

                    <li>
                     <label>
                        Payment:
                    <input name='payment' type="text" value={this.state.payment} onChange={this.handleChange} />
                    </label>
                    </li>

                    <li>
                     <label>
                        Location:
                    <input name='location' type="text" value={this.state.location} onChange={this.handleChange} />
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