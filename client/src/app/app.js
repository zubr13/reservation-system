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
import BuildingDetails from "./universities/university-details/building-details/building-details";
import Reservation from "./reservation/reservation";
import Contacts from "./contacts/contacts";
import Login from "./user/login/login";
import CreateReservation from "./reservation/create-reservation/create-reservation";

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
            <Route path="/reservation/create" component={CreateReservation} />
            <Route
              path={"/universities/:id/buildings/:id"}
              component={BuildingDetails}
            />
            <Route path={"/universities/:id"} component={UniversityDetails} />
            <Route path="/universities" component={Universities} />
            <Route path="/reservations" component={Reservation} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/login" component={Login} />
            <Redirect to="/main" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
