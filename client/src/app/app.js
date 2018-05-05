import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./app.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";
import Universities from "./universities/universities";
import UniversityDetails from "./universities/university-details/university-details";
import Reservation from "./reservation/reservation";
import Contacts from "./contacts/contacts";

class App extends Component {
  state = {
    response: ""
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/reservations" component={Reservation} />
            <Route path="/contacts" component={Contacts} />
            <Route
              path={"/universities/:id/details"}
              component={UniversityDetails}
            />
            <Route path="/universities" component={Universities} />
            <Redirect to="/main" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
