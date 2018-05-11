import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';


var objectArray = {
    "skating": [
        { itemID: 1, title: "Tony Hawks old skateboard", desc: "A pristine skateboard from my good friend Tony!", priceDeposit: "$100", priceMonthly: "$50", location: "Chicago", available: "yes" },
        { itemID: 2, title: "New Skateboard", desc: "My brand new skateboard", priceDeposit: "$30", priceMonthly: "$20", location: "L.A", available: "yes" },
    ]
}

class Itemtable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFromServer: [],
            species: []
        }
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
        this.state = {q : null};
    }

    head() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Deopsit</th>
                    <th>Monthly Payment</th>
                    <th>Location</th>
                    <th>Available</th>
                </tr>

            </thead>
        )
    }

    body() {
        const map1 = objectArray.skating.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.title}</td>
                    <td>{data.desc}</td>
                    <td>{data.priceDeposit}</td>
                    <td>{data.priceMonthly}</td>
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