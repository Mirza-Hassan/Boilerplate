import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const Main_App = {
  backgroundColor: "#4CAF50",
  textAlign: "left"
}

class About extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={Main_App}
          title="DASHBOARD"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>About Page</h1>
      </div>
    );
  }
}

export default About;
