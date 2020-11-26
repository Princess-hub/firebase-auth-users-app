import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    console.log(props)
    return (
        <Container>
            <Row>
                {
                    props.usersData.map (
                    (user) => <User
                    userInfo={user}
                    key={user.id}

                        
                    />
                    )
                }

            </Row>
        </Container>
    );
}

 
const mapStateToProps = (state) => ({
    usersData: state.userState.users
})

export default connect(null,mapStateToProps)(Users);
