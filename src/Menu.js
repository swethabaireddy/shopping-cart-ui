import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,Button,FormControl} from "react-bootstrap";

class Menu extends React.Component{
    render() {
        return <div style={{padding:'20px'}}>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Wallet</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Cart
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>;
    }
}
export default Menu