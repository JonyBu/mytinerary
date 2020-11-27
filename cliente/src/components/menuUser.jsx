import React from "react";
import { connect } from "react-redux";
import outLogin from "../redux/actions/logoutAction";

import { Button } from "reactstrap";

class MenuUser extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: [],
      isConected: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser.currentUser,
      isConected: this.props.isConected,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.outLogin(this.state);
  };

  render() {
    return (
      <>
        <Button
          color="warning"
          block
          outline
          onClick={this.handleClick.bind(this)}
        >
          logout
        </Button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer,
    isConected: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  outLogin: (data) => dispatch(outLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuUser);
