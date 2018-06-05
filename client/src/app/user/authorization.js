import React from "react";

export const Authorization = allowedRoles => WrappedComponent => {
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user: {
          name: "vcarl",
          role: "admin"
        }
      };
    }
    render() {
      const { role } = this.state.user;
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h1>No page for you!</h1>;
      }
    }
  };
};
