import React, { Component } from 'react';
import { Loggedin } from '../store/action/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { FirebaseService } from '../helpers/firebaseService'
import AppBar from 'material-ui/AppBar';

const Main_App = {
    backgroundColor: "#4CAF50",
    textAlign: "left"
}
const styles = {
    root: {
        border: '2px outset',
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.authReducer.user.email
        }
    }

    componentWillMount() {
        let key = localStorage.getItem('currentUser')
        FirebaseService.ref.child(`/Blood`).on("child_added", (snapshot) => {
            if (snapshot.val().type === 'donor') {

                console.log(snapshot.val())
            }
        })
        FirebaseService.ref.child(`/users/${key}`).on("value", (snapshot) => {
            if (snapshot.val()) {
                this.setState({
                    name: snapshot.val().firstname + " " + snapshot.val().lastname
                })
                this.props.Loggedin(snapshot.val())
            }
        })
    }
    render() {

        setInterval(() => {
            (this.props.authReducer.user.type === 'donor') ? this.setState(<h1></h1>) : <h1></h1>
        }, 200)
        return (

            <div className="App">
                <AppBar style={Main_App}
                    title="DASHBOARD"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <h1>Hello {this.state.name}</h1>

                {(this.props.authReducer.user.type === 'donor') ?

                    <div style={styles.root}>
                        <h1>mani </h1>
                    </div>
                    :
                    <div>
                        <Link to="/about">About</Link> <br />
                        <Link to="/contact">Contact</Link>
                    </div>}
            </div>
        );
    }
}
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        Loggedin: (data) => {
            dispatch(Loggedin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

