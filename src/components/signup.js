import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FirebaseService } from '../helpers/firebaseService'
import { signUp } from '../store/action/auth'
import { SignupComponent } from '../container/signup'

class Register extends Component {
    constructor() {
        super();
        this.state = {

            email: '',
            pass: ''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let newUser = {

            email: this.state.email,
            pass: this.state.pass,

        }
        FirebaseService.customAuth(newUser).then((user) => {
            multipath[`Blood/${user.uid}`] = newUser;
            FirebaseService.saveMultipath(multipath)
            newUser['uid'] = this.state.uid
            this.props.signUp(this.state)
            localStorage.setItem('currentUser', user.uid);
            this.context.router.push({
                pathname: "/login"
            })
        }).catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className='commentBox'>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} /><br />

            </div>
        );
    }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => {
            dispatch(signUp(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);