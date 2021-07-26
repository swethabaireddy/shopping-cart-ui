import {Button, Card} from "react-bootstrap";
import logo from "./orange-15311.png";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description
        }
    }

    render() {
        return <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={500} src={logo} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Add to cart </Button>
            </Card>
        </div>
    }
}
export default Product