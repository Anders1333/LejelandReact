import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink, WithRouter } from "react-router-dom";
import Itemtable from './Itemtable';
import Itemform from './Itemform';
import DataFacade from './DataFacade';

import ItemTableWithFilter from './itemTableWithFilter'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList: [],
      category: 'bikes'
      
      
    }
    this.handleClick = this.handleClick.bind(this);

  }



  handleClick(e) {
    
    e.preventDefault()
    const target = e.target;
    const id = target.id;
    this.setState({category: id})
    console.log(this.state.category)
    
}

  render() {
    return (

      <Router>
        <Switch>
        <Route path="/registerItem" render={() => <div><Itemform facade={DataFacade} /></div> }/>
        

          <div className="container-fluid">
            <h1>Lejeland</h1>
            <NavLink exact to="/registerItem">New item</NavLink>
           
            <hr/>
            <div className="row">
              <div className="col-sm-2" id="categories">
                <div>

                  <button data-toggle="collapse" data-target="#demo">Categories</button>

                  <div id="demo" className="collapse">
                    <ul>
                      <li>
                        <button data-toggle="collapse" data-target="#transport-list">Transport</button>
                        <div id="transport-list" className="collapse">
                          <ul>

                            <li><a href="cars" id="cars" onClick={this.handleClick}>Cars</a></li>
                            <li><a href="bikes" id="bikes" onClick={this.handleClick}>Bikes</a></li>
                            <li><a href="motorcycles" id="motorcycles" onClick={this.handleClick}>Motorcycles</a></li>
                            <li><a href="scooters" id="scooters" onClick={this.handleClick}>Scooters</a></li>
                            <li><a href="skating" id="skating" onClick={this.handleClick}>Skating</a></li>
                            <li><a href="Boats" id="boats" onClick={this.handleClick}>Boats</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <button data-toggle="collapse" data-target="#living-list">Living</button>
                        <div id="living-list" className="collapse">
                          <ul>
                            <li><a href="couches" id="couches" onClick={this.handleClick}>Couches</a></li>
                            <li><a href="tables" id="tables" onClick={this.handleClick}>Tables</a></li>
                            <li><a href="chairs" id="chairs" onClick={this.handleClick}>Chairs</a></li>
                            <li><a href="carpets" id="carpets" onClick={this.handleClick}>Carpets</a></li>
                            <li><a href="bathroom" id="bathroom" onClick={this.handleClick}>Bathroom</a></li>
                            <li><a href="bedroom" id="bedroom" onClick={this.handleClick}>Bedroom</a></li>
                            <li><a href="kids" id="kids" onClick={this.handleClick}>For kids</a></li>
                          </ul>
                        </div>
                      </li>


                      <li>
                        <button data-toggle="collapse" data-target="#services-list">Services</button>
                        <div id="services-list" className="collapse">
                          <ul>
                            <li><a href="driving" id="driving" onClick={this.handleClick}>Driving</a></li>
                            <li><a href="cooking" id="cooking" onClick={this.handleClick}>Cooking</a></li>
                            <li><a href="cleaning" id="cleaning" onClick={this.handleClick}>Cleaning</a></li>
                            <li><a href="gardening" id="gardening" onClick={this.handleClick}>Gardening</a></li>
                            <li><a href="babysitting" id="babysitting" onClick={this.handleClick}>Babysitting</a></li>
                            <li><a href="entertainment" id="entertainment" onClick={this.handleClick}>Entertainment</a></li>
                            <li><a href="misc" id="misc" onClick={this.handleClick}>Misc</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <button data-toggle="collapse" data-target="#electronics-list">Electronics</button>
                        <div id="electronics-list" className="collapse">
                          <ul>
                            <li><a href="lamps" id="lamps" onClick={this.handleClick}>Lamps</a></li>
                            <li><a href="ovens" id="ovens" onClick={this.handleClick}>Ovens</a></li>
                            <li><a href="refrigerators" id="refrigerators" onClick={this.handleClick}>Refrigerators</a></li>
                            <li><a href="tvs" id="tvs" onClick={this.handleClick}>TVs</a></li>
                            <li><a href="soundsystems" id="soundsystems" onClick={this.handleClick}>Soundsystems</a></li>
                            <li><a href="toys" id="toys" onClick={this.handleClick}>Toys</a></li>
                            <li><a href="computers" id="computers" onClick={this.handleClick}>Computers</a></li>
                            <li><a href="consoles" id="consoles" onClick={this.handleClick}>Consoles</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-10">

                <div><Itemtable facade={DataFacade} category={this.state.category}/></div>
                
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}


export default App;
