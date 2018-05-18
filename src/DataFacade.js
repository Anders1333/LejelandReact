import React, {Component} from 'react';
const URL = require('../package.json').config.url;


function handleHttpErrors(res) {
  if (!res.ok) {
    throw {message:res.statusText,status:res.status};
  }
  return res.json();
}


class DataFacade extends Component {


      fetchItemsFromCategory(categoryName){
        console.log("Dataface calls the fetch on : "+URL+"/items/category/"+categoryName)
        const options = this.makeFetchOptions("GET");
        console.log("data from Datafacade is: " + fetch(URL+"/items/category/"+categoryName,options,true)
        .then(handleHttpErrors));
        return fetch(URL+"/items/category/"+categoryName,options,true)
        .then(handleHttpErrors);
      }

      fetchItemsFromUserId(id){
        console.log("Dataface calls the fetch on : "+URL+"/users/"+id+"/items")        
        const options = this.makeFetchOptions("GET");
        console.log("data from Datafacade is: " + fetch(URL+"/users/"+id+"/items",options,true)
        .then(handleHttpErrors));
        return fetch(URL+"/users/"+id+"/items",options,true)
        .then(handleHttpErrors);
      
      }

      fetchAllItems(){
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/items",options,true)
        .then(handleHttpErrors);
      }

      createNewItem(item){
        console.log("Datafacade calls the fetch on : "+URL+"/items/addItem")
        const options = this.makeFetchOptions("POST",item);
        return fetch(URL+"/items/addItem",options,true)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .then(handleHttpErrors);
      }



      makeFetchOptions = (type, b) => {
        let headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
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
