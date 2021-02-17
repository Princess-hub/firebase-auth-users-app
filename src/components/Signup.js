import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {signup} from '../actions/authActions';
import {connect} from 'react-redux';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
         this.props.Signup(this.state);
        this.setState({
                username: "",
                email: "",
                password: "",
        })
    }

    render() {
        return (
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                <h1>Signup</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" 
                    value={this.state.username} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" 
                    value={this.state.email} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" 
                    value={this.state.password} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="signup">
                    Signup
                </Button>
            </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    Signup: signup
}

export default connect(null, mapDispatchToProps) (Signup);


