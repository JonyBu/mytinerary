import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import imagenUser from '../imagenes/user.png';
import imagenMenu from '../imagenes/menu.png';
import { connect } from 'react-redux';
import outLogin from '../redux/actions/logoutAction';


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: [],
            isConected: [],
        }
    }

    componentDidMount() {
        this.setState({ currentUser: this.props.currentUser.currentUser, isConected: this.props.currentUser.isConected })
    }

    handleClick = event => {
        event.preventDefault()
        this.props.outLogin(this.state)
    }

    render() {
        console.log(this.state);
        return (
            <div className="li">
                <Navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav >
                            <img className="logoUser" src={imagenUser} alt="" />
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>
                                <Link to="/createAccount">Create Account</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/login">login</Link>
                            </DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav >
                            <img className="logoMenu" src={imagenMenu} alt="" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to="/cities">Chose your itinerary</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/" onClick={this.handleClick.bind(this)}>logout</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/profile">Profile</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Navbar>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => ({
    outLogin: (data) => dispatch(outLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);