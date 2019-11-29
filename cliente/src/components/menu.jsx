import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import imagenUser from '../imagenes/user.png';
import imagenMenu from '../imagenes/menu.png';


class Menu extends React.Component {
    render() {
        return (
            <div className="li">
                <Navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav >
                            <img className="logoUser" src={imagenUser} alt="" />
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>
                                <Link to="/users">Create Account</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/login">log in</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav >
                            <img className="logoMenu" src={imagenMenu} alt="" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to="/cities">Cities</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/itineraries/:_id">Itineraries</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/comments">Comments</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/details">details</Link>
                            </DropdownItem>
                            
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Navbar>
            </div>
        );
    }
}


export default Menu;