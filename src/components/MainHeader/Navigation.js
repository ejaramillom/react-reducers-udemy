import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
const ctx = useContext(AuthContext);
// this is a more elegant solution to use the consumers and providers for the context API

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
