import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./style/base.css";
import Header from "./containers/Header";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div className="container">
              <Header />
              <div style={{marginTop: 65}} className="app-body-bg">
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/contact" component={Contact} />
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
