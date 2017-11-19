import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';
import Input from 'muicss/lib/react/input';
import { storeHomeInfo } from '../actions/homeActions';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  inputOnChange = (event) => {
    console.log('home input:', event.target.value);
    const inputValue = event.target.value;
    let homeInfo = {};
    homeInfo.inputValue = inputValue;
    this.props.storeHomeInfo(homeInfo);
  };

  render = () => {
    return (
      <div>
        <h2 className="mui--text-center">Home Page</h2>
        <div style={{marginLeft: "25%", marginRight: "25%"}}>
          <Input label="Home" onChange={this.inputOnChange} floatingLabel={true} value={this.props.homeInfo.inputValue}/>
          <pre>Home Info: {JSON.stringify(this.props.homeInfo)}</pre>
          <pre>About Info: {JSON.stringify(this.props.aboutInfo)}</pre>
          <pre>Contact Info: {JSON.stringify(this.props.contactInfo)}</pre>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { 
      homeInfo: state.storeHomeInfoReducer,
      aboutInfo: state.storeAboutInfoReducer,
      contactInfo: state.storeContactInfoReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    storeHomeInfo
  }, dispatch);
}

export default connect(mapStateToProps, {storeHomeInfo})(Home);
