import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Authorization extends React.Component {
  getUnauthorizedAction() {
    return this.props.redirect ? <Redirect to={"/login"} /> : "";
  }

  render() {
    const user = this.props.user || {};
    const role = user.role;
    return this.props.allowedRoles.includes(role)
      ? this.props.children
      : this.getUnauthorizedAction();
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  };
}

export default connect(mapStateToProps)(Authorization);
