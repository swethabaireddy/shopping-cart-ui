import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";
import Product from "./Product";
import axios from 'axios';
import {Col, Container, Row, Spinner} from "react-bootstrap";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            p_name_1: 'swetha is a good girl',
            p_name_2: 'swetha is trad girl',
            spinner_hidden: false
        }
    }

    componentDidMount() {
       axios.get('https://dummy.restapiexample.com/api/v1/employees').then(res=>{
            this.setState({p_name_1: res.data.data[0].employee_name})
            this.setState({p_name_2: res.data.data[1].employee_name})
            this.setState({spinner_hidden: true})
       })
    }

    render(){
       return <div >
           <Menu/>
           <Container>
               <Row>
               <Col>
                   <div>
                       <Product name={this.state.p_name_2} description='Apple is avalable'/>
                       <div hidden={this.state.spinner_hidden}>
                           <Spinner animation="border" variant="primary" />
                       </div>
                   </div>
               </Col>
                   <Col>
                       <div>
                           <Product name={this.state.p_name_1} description='Banana is avalable'/>
                           <div hidden={this.state.spinner_hidden}>
                               <Spinner animation="border" variant="primary" />
                           </div>
                       </div>
                   </Col>
                   <Col>
                       <div>
                           <Product name={this.state.p_name_2} description='Orange  is avalable'/>
                           <div hidden={this.state.spinner_hidden}>
                               <Spinner animation="border" variant="primary" />
                           </div>
                       </div>
                   </Col>
               </Row>
               <Row>
                   <Col>
                       <div>
                           <Product name={this.state.p_name_1} description='Apple is avalable'/>
                           <div hidden={this.state.spinner_hidden}>
                               <Spinner animation="border" variant="primary" />
                           </div>
                       </div>
                   </Col>
                   <Col>
                       <div>
                           <Product name={this.state.p_name_2} description='Banana is avalable'/>
                           <div hidden={this.state.spinner_hidden}>
                               <Spinner animation="border" variant="primary" />
                           </div>
                       </div>
                   </Col>
                   <Col >
                       <div>
                           <Product name={this.state.p_name_1} description='Orange  is avalable'/>
                           <div hidden={this.state.spinner_hidden}>
                               <Spinner animation="border" variant="primary" />
                           </div>
                       </div>
                   </Col>
               </Row>
           </Container>
       </div>
   }
}
export default Home