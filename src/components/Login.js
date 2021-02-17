import React, { Component } from 'react';
import {loginUser} from '../actions/authActions';
import {connect} from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        this.props.login(this.state.email, this.state.password)
    }

    render() {
        if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
            return <Redirect to="/" /> 
        }
        return (
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                <h1>Login</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                {/* <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" 
                    value={this.state.username} onChange={this.handleChange} />
                </Form.Group> */}
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
                <Button variant="primary" type="Login">
                    Login
                </Button>
            </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login: loginUser
}
const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);


