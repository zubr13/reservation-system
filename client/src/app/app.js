import React, { Component } from "react";
import "./app.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";
import Universities from "./universities/universities";
import Reservation from "./reservation/reservation";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/reservations");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Universities />
        <Reservation />
        <Footer />
      </div>
    );
  }
}

export default App;
