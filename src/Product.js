import {Button, Card, Col, Container, Row} from "react-bootstrap";
import logo from "./orange-15311.png";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            quantity: 0
        }
    }

    IncrementItem = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    }
    DecreaseItem = () => {
        var q=this.state.quantity;
        var f=q;
        if(f==0){
            this.setState({quantity: 0})
        }else{
            this.setState({ quantity: this.state.quantity - 1 });
        }
    }

    AddtoCart = () => {
        var cart=this.state.cartQuantity;
        var finalVal=this.state.quantity+cart;
        this.setState({ cartQuantity: finalVal });
    }


    render() {
        return <div style={{padding: '10px'}}>
            <Card style={{ width: '18rem' , padding: '10px'}}>
                <Card.Img variant="top" height={500} src={logo} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="outline-success" size="sm" onClick={this.IncrementItem}>+</Button>
                            <Button variant="outline-primary" size="sm">{this.state.quantity}</Button>
                            <Button variant="outline-danger" size="sm" onClick={this.DecreaseItem}>-</Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="sm" onClick={this.AddtoCart}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    }
}
export default Product