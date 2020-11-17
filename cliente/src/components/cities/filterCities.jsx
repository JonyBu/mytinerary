import React from "react";
import { Input } from "reactstrap";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFilter: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      cityFilter: e.target.value,
    });

    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="inputSearch">
        <Input
          type="text"
          id="filter"
          placeholder="Filter our current cities"
          onChange={(e) => this.handleChange(e, this)}
          className="text-center"
        />
      </div>
    );
  }
}

export default FilterForm;
