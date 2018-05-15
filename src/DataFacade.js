import React, {Component} from 'react';
const URL = require('../package.json').config.url;


function handleHttpErrors(res) {
  if (!res.ok) {
    throw {message:res.statusText,status:res.status};
  }
  return res.json();
}


class DataFacade {


      fetchItemsFromCategory(categoryName){
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/items/category/"+categoryName,options,true)
        .then(handleHttpErrors)
      }


      fetchAllPersons = () => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/api/info/people",options,true)
        .then(handleHttpErrors)
      }
      fetchAllPlanets = () => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/api/info/planets",options,true)
        .then(handleHttpErrors)
      }



  


  makeFetchOptions = (type, b) => {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
   
    return {
      method: type,
      headers,
      body: JSON.stringify(b)
    }
  }
}
const facade = new DataFacade();
export default facade;
