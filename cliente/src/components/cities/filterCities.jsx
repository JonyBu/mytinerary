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
      <div className="mt-5 mb-3">
        <Input
          type="text"
          id="filter"
          placeholder="Search our current cities"
          onChange={(e) => this.handleChange(e, this)}
          className="text-center"
        />
      </div>
    );
  }
}

export default FilterForm;
