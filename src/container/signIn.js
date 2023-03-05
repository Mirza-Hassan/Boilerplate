import * as React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router'

const Main_App = {
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#4CAF50'
}
const style1 = {
    height: 400,
    width: '500',
    marginLeft: 630,
    textAlign: 'center',
    display: 'inline-block',
    marginTop: 100
};
const login = {
    marginLeft: 170,
    marginTop: 20
}
const para = {
    marginLeft : -110
 }
export class SigninComponent extends React.Component {
    render() {

        return (
            <div>
                <AppBar style={Main_App}
                    title="APPLICATION"
                    showMenuIconButton={true} />

                <Paper style={style1} zDepth={0}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{ color: 'black' }}>Login</h1>
                        <TextField
                            hintText="Enter Email Address"
                            floatingLabelText="Email Address"
                            name="email"

                            onChange={this.props._inputHandler}
                        /><br />

                        <TextField
                            hintText="Enter password"
                            floatingLabelText="Password"
                            name="pass"
                            type="Password"

                            onChange={this.props._inputHandler}
                        /><br />

                        <RaisedButton type="submit" label="Login" backgroundColor="#4CAF50" style={login} /><br />
                        <p style={para}>Don't you have an Account? <Link to="/">Signup</Link></p>
                        <br />
                    </form>
                </Paper>

            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}