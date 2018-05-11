import React, { Component } from 'react';

export default class FilterTableWork extends Component {

    constructor(props) {
        super()
        this.state = {
            items: [],
            
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ]
        }
    }


    componentWillMount() {
        console.log("--- will mount --- \n" + this.state.initialItems)
        this.setState({ items: this.state.initialItems })
        console.log("--- will mount --- \n" + this.state.initialItems)
    }

    filterList(event) {
        console.log("-------------------------")
        console.log(updatedList)
        var updatedList = this.state.initialItems;
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
                <List tableItems={this.state.items} />
            </div>
        )
    }

}


class List extends Component {
    render() {

        return (

            <ul className="list-group">
                {
                    this.props.tableItems.map(function (item) {
                        return <li className="list-group-item" data-category={item} key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

