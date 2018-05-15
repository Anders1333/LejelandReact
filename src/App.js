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
      loggedIn: false,
      resultList: "no data to show",
      category: ""
    }
    this.handleClick = this.handleClick.bind(this);

  };



  handleClick(e) {
    console.log(e.target.id);
    this.setState({resultList: <Itemtable facade={DataFacade} category={e.target.id}  />});
  
  //We change the state value of the resultList. This prevents the whole page from being overwritten. 
  //It only changes the table (resultList)
  }

  render() {
    return (

      <Router>
        <Switch>
        <Route path="/registerItem" render={() => <div><Itemform /></div> }/>
        

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

                            <li><a href="">Cars</a></li>
                            <li><button id='bikes' onClick={this.handleClick}>Bikes</button></li>
                            <li><a href="motorcycles">Motorcycles</a></li>
                            <li><a href="scooters">Scooters</a></li>
                            <li><a href="skating">Skating</a></li>
                            <li><a href="Boats">Boats</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <button data-toggle="collapse" data-target="#living-list">Living</button>
                        <div id="living-list" className="collapse">
                          <ul>
                            <li><a href="">Couches</a></li>
                            <li><a href="">Tables</a></li>
                            <li><a href="">Chairs</a></li>
                            <li><a href="">Carpets</a></li>
                            <li><a href="">Bathroom</a></li>
                            <li><a href="">Bedroom</a></li>
                            <li><a href="">For kids</a></li>
                          </ul>
                        </div>
                      </li>


                      <li>
                        <button data-toggle="collapse" data-target="#services-list">Services</button>
                        <div id="services-list" className="collapse">
                          <ul>
                            <li><a href="">Driving</a></li>
                            <li><a href="">Cooking</a></li>
                            <li><a href="">Cleaning</a></li>
                            <li><a href="">Gardening</a></li>
                            <li><a href="">Babysitting</a></li>
                            <li><a href="">Entertainment</a></li>
                            <li><a href="">Misc</a></li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <button data-toggle="collapse" data-target="#electronics-list">Electronics</button>
                        <div id="electronics-list" className="collapse">
                          <ul>
                            <li><a href="">Lamps</a></li>
                            <li><a href="">Ovens</a></li>
                            <li><a href="">Refrigerators</a></li>
                            <li><a href="">TVs</a></li>
                            <li><a href="">Soundsystems</a></li>
                            <li><a href="">Toys</a></li>
                            <li><a href="">Computers</a></li>
                            <li><a href="">Consoles</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-10">

                <div>{this.state.resultList}</div>
                
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}


export default App;
