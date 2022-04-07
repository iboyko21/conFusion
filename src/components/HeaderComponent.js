import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Label,
        Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Input, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleReservation = this.handleReservation.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleReservation(event) {
        this.toggleModal();
        alert("Name: " + this.name.value + "Date: " + this.date.value + 
        " Time: " + this.time.value + "Party Size: " + this.partysize.value);
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <a href="#" className="navbar-brand">Ristorante <span className="text-warning">Con Fusion</span></a>
                        {/* <NavbarBrand href="#">
                            <p>Ristorante Con Fusion</p>
                             <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand> */}

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Button outline color="light" onClick={this.toggleModal}>
                                            <span className="fa fa-pencil-square-o fa-lg"></span> Make Reservation
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                     </div>
                </Navbar>



                
               
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Make a Reservation</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleReservation}>
                            <FormGroup>
                            <Col md={{size: 8}}>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                innerRef={(input) => this.name = input} />
                            </Col>
                            </FormGroup>
                            <FormGroup>
                            <Col md={{size: 6}}>
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" id="date" name="date"
                                innerRef={(input) => this.date = input} />
                            </Col>
                            </FormGroup>
                            <FormGroup>
                            <Col md={{size: 6}}>
                                <Label htmlFor="time">Time</Label>
                                <Input type="time" id="time" name="time"
                                innerRef={(input) => this.time = input} />
                            </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col>
                                    <FormGroup>
                                    <Col md={{size: 6}}>
                                        <Label htmlFor="partysize">Number of People</Label>
                                    </Col>
                                    <Col md={{size: 1}}>
                                            <Input type="select" id="partysize" name="partysize" 
                                            innerRef={(input) => this.partysize = input}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8+</option>
                                            </Input>
                                    </Col>
                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 3, offset: 4}}>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;