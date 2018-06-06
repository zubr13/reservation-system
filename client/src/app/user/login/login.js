import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../authorization.actions";

const tabNames = {
  registration: "registration",
  login: "login"
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: tabNames.login
    };
    this.user = {};
  }

  changeTab(tabName) {
    this.setState({
      currentTab: tabName
    });
  }
  onChange = (propName, event) => {
    this.user[propName] = event.target.value;
  };

  getClassName(tabName) {
    return tabName === this.state.currentTab ? "active" : "";
  }

  onLoginUser = () => {
    loginUser(this.user).then(() => {
      window.location.reload();
    });
  };

  onRegisterUser = () => {
    registerUser(this.user).then(() => {
      window.location.reload();
    });
  };

  renderLoginForm() {
    return (
      <form>
        <div className="input-container">
          <label>Емейл</label>
          <input type="text" onChange={this.onChange.bind(this, "email")} />
        </div>
        <div className="input-container">
          <label>Пароль</label>
          <input
            type="password"
            onChange={this.onChange.bind(this, "password")}
          />
        </div>
        <ul className="actions">
          <li>
            <Link to="/main">
              <a className="button" onClick={this.onLoginUser}>
                Авторизуватися
              </a>
            </Link>
          </li>
        </ul>
      </form>
    );
  }

  renderRegistrationForm() {
    return (
      <form>
        <div className="input-container">
          <label>Емейл</label>
          <input type="text" onChange={this.onChange.bind(this, "email")} />
        </div>
        <div className="input-container">
          <label>Ім'я</label>
          <input type="text" onChange={this.onChange.bind(this, "name")} />
        </div>
        <div className="input-container">
          <label>Фамілія</label>
          <input type="text" onChange={this.onChange.bind(this, "surname")} />
        </div>
        <div className="input-container">
          <label>Мобільний телефон</label>
          <input
            type="text"
            onChange={this.onChange.bind(this, "mobileNumber")}
          />
        </div>
        <div className="input-container">
          <label>Вид діяльності</label>
          <input
            type="text"
            onChange={this.onChange.bind(this, "occupation")}
          />
        </div>
        <div className="input-container">
          <label>Пароль</label>
          <input
            type="password"
            onChange={this.onChange.bind(this, "password")}
          />
        </div>
        <ul className="actions">
          <li>
            <Link to="/main">
              <a className="button" onClick={this.onRegisterUser}>
                Зареєструватися
              </a>
            </Link>
          </li>
        </ul>
      </form>
    );
  }

  render() {
    return (
      <div className="featured create-reservation">
        <div className="container">
          <div className="title">
            <span
              className={`tab ${this.getClassName(tabNames.login)}`}
              onClick={this.changeTab.bind(this, tabNames.login)}
            >
              Авторизація
            </span>
            <span
              className={`tab ${this.getClassName(tabNames.registration)}`}
              onClick={this.changeTab.bind(this, tabNames.registration)}
            >
              Реєстрація
            </span>
          </div>
          {this.state.currentTab === tabNames.login
            ? this.renderLoginForm()
            : this.renderRegistrationForm()}
        </div>
      </div>
    );
  }
}

export default Login;
