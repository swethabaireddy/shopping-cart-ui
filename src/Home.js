import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";
import Product from "./Product";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import axios from "axios";

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
    // componentDidMount() {
    //     express.get(', function (request,response){
    //         response.header("Access-Control-Allow-Origin", "*");
    //         response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //         this.setState({p_name_1: response.data[0].itemName})
    //         this.setState({p_name_2: response.data[1].itemName})
    //         this.setState({spinner_hidden: true})
    //     })
    // }

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