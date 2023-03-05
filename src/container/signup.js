import * as React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router'

const Main_App = {
    backgroundColor: "#4CAF50",
    textAlign: "left"
}
const style1 = {
    height: 400,
    width: '500',
    marginLeft: 500,
    textAlign: 'center',
    display: 'inline-block',
    marginTop: 100
};
const login = {
    marginLeft: 170,
    marginTop: 20
}

const para = {
    marginLeft: -110
}
export class SignupComponent extends React.Component {
    render() {
        return (
            <div >
                <AppBar style={Main_App}
                    title="APPLICATION"
                    showMenuIconButton={true} />
                <Paper style={style1} zDepth={0}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{ color: 'black' }}>SignUp</h1>
                        <TextField
                            hintText="Enter Email Address"
                            floatingLabelText="Email Address"
                            name="email"
                            ref="email"
                            value={this.props.signUpState.email}
                            onChange={this.props._inputHandler}
                        /><br />

                        <TextField
                            hintText="Enter password"
                            floatingLabelText="Password"
                            name="pass"
                            ref="pass"
                            type="password"
                            value={this.props.signUpState.pass}
                            onChange={this.props._inputHandler}
                        /><br />

                        <RaisedButton type="submit" label="Submit" backgroundColor="#4CAF50" style={login} /><br />
                        <p style={para}>Already have an Account? <Link to="/login">Login</Link></p>

                        <br />

                    </form>
                </Paper>

            </div>
        )
    }
}

SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}