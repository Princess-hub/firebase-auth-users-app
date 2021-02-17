import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {logout} from '../src/actions/authActions'
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  
  // addNewUser = (user) => {
  //   user.id=Math.random().toString()
  //   this.setState({
  //     users: [...this.state.users, user]
  //   })
  // }
  // deleteUser = (id) => {
  //   // let undeletedUsers = this.state.users.filter(user => user.id !== id);
  //   // this.setState({
  //   //   users: undeletedUsers
  //   // })
  // }
  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     users: this.state.users.map(user => user.id === id ? updatedUser: user)
  //   })
  // }

  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h3>Add Users</h3>
              <AddUserForm />
            </Col>
            <Col>
            <h3>All Codetrain Users</h3>
            <br />
            <button onClick = {() => this.props.logout()}>Logout</button>
            <br />
            <br />
              <Users />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  logout: logout
}


export default connect(null, mapDispatchToProps)(App);

