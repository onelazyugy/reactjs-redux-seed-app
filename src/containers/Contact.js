import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from 'muicss/lib/react/input';
import { storeContactInfo } from '../actions/contactActions';

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  inputOnChange = (event) => {
    console.log('contact input:', event.target.value);
    const inputValue = event.target.value;
    let contactInfo = {};
    contactInfo.inputValue = inputValue;
    this.props.storeContactInfo(contactInfo);
  };

  render = () => {
    return (
      <div>
        <h2 className="mui--text-center">Contact Page</h2>
        <div style={{marginLeft: "25%", marginRight: "25%"}}>
          <Input label="Contact" onChange={this.inputOnChange} floatingLabel={true} value={this.props.contactInfo.inputValue} />
          <pre>Home Info: {JSON.stringify(this.props.homeInfo)}</pre>
          <pre>About Info: {JSON.stringify(this.props.aboutInfo)}</pre>
          <pre>Contact Info: {JSON.stringify(this.props.contactInfo)}</pre>
        </div>        
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    storeContactInfo
  }, dispatch);
}

function mapStateToProps(state) {
  return {
      contactInfo: state.storeContactInfoReducer,
      aboutInfo: state.storeAboutInfoReducer,
      homeInfo: state.storeHomeInfoReducer
  };
}

export default connect(mapStateToProps, {storeContactInfo})(Contact);
