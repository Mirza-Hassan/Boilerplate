import React, { Component } from 'react'
import { signIn } from '../store/action/auth'
import { connect } from 'react-redux'
import { FirebaseService } from '../helpers/firebaseService'
import { SigninComponent } from '../container/signIn'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault()
        FirebaseService.customLogin(this.state)
            .then((user) => {
                this.props.signInUser(user)
                localStorage.setItem('currentUser', user.uid);
                this.context.router.push({
                    pathname: '/home',

                })

            })
            .catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <SigninComponent _inputHandler={this.inputHandler} _submit={this.signin} /><br />

            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => { 
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (data) => {
            dispatch(signIn(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);