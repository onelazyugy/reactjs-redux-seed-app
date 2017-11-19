import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../media/complaints.png';
import reactLogo from '../media/logo.svg';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('Header page props:', this.props);
  }

  render = () => {
    const bg = {
      background: "#ffffff",
      position: "fixed",
      top: 0
    };
    const menu = 
    <div>
      <Link to={"/"}><FlatButton label="Home" style={{color: "black"}}/></Link>
      <Link to={"/about"}><FlatButton label="About" style={{color: "black"}}/></Link>
      <Link to={"/contact"}><FlatButton label="Contact" style={{color: "black"}}/></Link>
    </div>;
    return (
      <div>
        <AppBar style={bg}
          title={<Link to={"/"}>ReactJS Redux Skeletal app</Link>}
          iconElementLeft={<Link to={"/"}><img src={reactLogo} className="app-logo" alt="logo" /></Link>}
          iconElementRight={menu}
        />
      </div>
    );
  }
}

export default connect(null, null)(Header);
