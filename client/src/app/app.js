import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './app.css'
import Header from './header/header'
import Footer from './footer/footer'
import Main from './main/main'
import Universities from './universities/universities'
import Reservation from './reservation/reservation'

class App extends Component {
  state = {
    response: '',
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/reservations')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Redirect from="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route path="/reservations" component={Reservation} />
          <Route path="/universities" component={Universities} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
