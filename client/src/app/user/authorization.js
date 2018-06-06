import React from "react";
import { connect } from "react-redux";

export class Authorization extends React.Component {
  render() {
    const user = this.props.user || {};
    const role = user.role;
    return this.props.allowedRoles.includes(role) ? this.props.children : null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  };
}

export default connect(mapStateToProps)(Authorization);
