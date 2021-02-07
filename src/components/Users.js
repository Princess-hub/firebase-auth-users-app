import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    let displayInfo;
    if (props.requesting) {
        displayInfo = <p>Loading...</p>
    } else if (props.requested && props.users.length === 0) {
        displayInfo = <p>No users found</p>
    } else if (props.requested && props.users.length > 0) {
        displayInfo = props.users.map((user) => {
            return(
                <User userInfo={user} key={user.id} editUser={props.editUser} />
            );
        })
    }
    return (
        <Container>
            <Row>
                { displayInfo }

            </Row>
        </Container>
    );
}

 
const mapStateToProps = (state) => ({
    usersData: state.userState.users,
    users:state.firestore.ordered.user,
    requesting: state.firestore.status.requesting.user,
    requested:state.firestore.status.requested.user,
})

export default compose(connect(mapStateToProps), firestoreConnect)(["user"])(Users);
