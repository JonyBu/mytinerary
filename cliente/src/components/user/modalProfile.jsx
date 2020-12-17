import React from "react";
import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Col,
} from "reactstrap";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPen,  } from "@fortawesome/free-solid-svg-icons";

import updateUserAction from "../../redux/actions/updateUserAction";


class ModalProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      datos: this.props.datos,
      newdata:{},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    this.setState({...this.state, id: this.props.loginReducer.currentUser._id})
  }

  toggle = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  handleInputChange = (event) => {
    const newdata = {[event.target.name]: event.target.value , id:this.state.id}
    this.setState({
      newdata
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.updateUserAction(this.state.newdata)
    this.toggle();
  };

  claseDesde = () => {
    switch (this.state.datos.name) {
      case "profilePic":
        return "botonEditarImg";
      default:
        return "botonEditar";
    }
  }

  render() {
    return (
      <>
        <Button color="light" className={ this.claseDesde() } onClick={this.toggle}>
          <FontAwesomeIcon icon={faPen} />
        </Button>

        <Modal isOpen={this.state.abierto} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Insert your new {this.state.datos.placeholder}</ModalHeader>
          <ModalBody>
              <Col xs={12}>
                <Input
                  type={this.state.datos.type}
                  name={this.state.datos.name}
                  id={this.state.datos.name}
                  placeholder={this.state.datos.placeholder}
                  onChange={this.handleInputChange}
                />
              </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleClick}>
              Agree
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAction: (data) => dispatch(updateUserAction(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ModalProfile);
