import React from 'react'

class FilterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })

        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="inputSearch">
                <input type="text" id="filter"
                    placeholder="Filter our current cities"
                    //value={this.state.cityFilter} 
                    onChange={(e) => this.handleChange(e, this)} />
            </div>
        )
    }
}

export default FilterForm