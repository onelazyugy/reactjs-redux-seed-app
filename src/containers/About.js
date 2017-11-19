import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from 'muicss/lib/react/input';
import { storeAboutInfo } from '../actions/aboutActions';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  inputOnChange = (event) => {
    console.log('about input:', event.target.value);
    const inputValue = event.target.value;
    let aboutInfo = {};
    aboutInfo.inputValue = inputValue;
    this.props.storeAboutInfo(aboutInfo);
  };

  render = () => {
    return (
      <div>
        <h2 className="mui--text-center">About Page</h2>
        <div style={{marginLeft: "25%", marginRight: "25%"}}>
          <Input label="About" onChange={this.inputOnChange} floatingLabel={true} value={this.props.aboutInfo.inputValue} />
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
    storeAboutInfo
  }, dispatch);
}

function mapStateToProps(state) {
  return {
      aboutInfo: state.storeAboutInfoReducer,
      homeInfo: state.storeHomeInfoReducer,
      contactInfo: state.storeContactInfoReducer
  };
}

export default connect(mapStateToProps, {storeAboutInfo})(About);
