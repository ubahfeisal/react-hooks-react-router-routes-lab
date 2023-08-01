import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  color: "blue",
  backgroundColor: "white",
  display: "block",
  width: "30%"
}
function NavBar() {
  return (
    <div>
      <NavLink to="/" style={styles} activeStyle={{ color: "black" }}>
        Home
      </NavLink>
      <NavLink to="/actors" style={styles} activeStyle={{ color: "black" }}>
        Actors
      </NavLink>
      <NavLink to="/directors" style={styles} activeStyle={{ color: "black" }}>
        Directors
      </NavLink>
      <NavLink to="/movies" style={styles} activeStyle={{ color: "black" }}>
        Movies
      </NavLink>
    </div>
  )
}

export default NavBar;