import React, { Component } from 'react';

export default class FilterTableWork extends Component {

    constructor(props) {
        super()
        this.state = {
            items: [],

            initialItems: [
                { itemID: 1, title: "Tony Hawks old skateboard", desc: "A pristine skateboard from my good friend Tony!", priceDeposit: "$100", priceMonthly: "$50", location: "Chicago", available: "yes" },
                { itemID: 2, title: "Old Skateboard", desc: "My old skateboard", priceDeposit: "$30", priceMonthly: "$10", location: "L.A", available: "no" }
            ]


        }
    }


    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    }


    filterList(event) {
        console.log("-------------------------")
        var updatedList = this.state.initialItem;
        console.log(updatedList)
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }



    render() {
        return (
            <div className="filter-list">
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList.bind(this)} />
                    </fieldset>
                </form>
                <div>
                    <List tableItems={this.state.items} />
                </div>
            </div>
        )
    }

}


class List extends Component {

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
        const map1 = this.props.tableItems.map((data, index) => {
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
            <table className="table">
                {this.head()}
                {this.body()}
            </table>
        )
    }
}

