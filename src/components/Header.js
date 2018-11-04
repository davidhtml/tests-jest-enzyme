import React from 'react';
import { NavLink } from 'react-router-dom';

const activeNav = {
    fontWeight: "bold",
    color: "#199"
}

const Header = () => (
    <header>
        <h1>Expensify.React App</h1>
        <p>Short description</p>
        <NavLink to="/" activeClassName="selected" activeStyle={activeNav} exact>Home</NavLink> <br/>
        <NavLink to="/create" activeClassName="selected" activeStyle={activeNav} exact>Create expense</NavLink> <br/>
        <NavLink to="/help" activeClassName="selected" activeStyle={activeNav} exact>Help</NavLink> <br/>
    </header>
);

export default Header;
