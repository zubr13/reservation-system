import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./app.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { connect } from "react-redux";
import Main from "./main/main";
import Universities from "./universities/universities";
import Reservation from "./reservation/reservation";
import ReservationRequests from "./reservation/reservation-requests/reservation-requests";
import Contacts from "./contacts/contacts";
import Login from "./user/login/login";
import CreateReservation from "./reservation/create-reservation/create-reservation";
import CreateUniversity from "./universities/create-university/create-university";
import { getCurrentUser } from "./user/user.actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCurrentUser);
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/reservation/create" component={CreateReservation} />
            <Route path="/universities/create" component={CreateUniversity} />
            <Route path="/universities" component={Universities} />
            <Route path="/reservations" component={Reservation} />
            <Route
              path="/reservation-requests"
              component={ReservationRequests}
            />
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

function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  };
}

export default connect(mapStateToProps)(App);
