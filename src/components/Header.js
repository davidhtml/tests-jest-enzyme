import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';
const activeNav = {
    fontWeight: "bold",
    color: "#199"
}

const Header = (props) => (
    <header>
        <h1>Expensify.React App</h1>
        <p>Short description</p>
        <NavLink to="/dashboard" activeClassName="selected" activeStyle={activeNav}>Home</NavLink> <br/>
        <NavLink to="/create" activeClassName="selected" activeStyle={activeNav} exact>Create expense</NavLink> <br/>
        <NavLink to="/help" activeClassName="selected" activeStyle={activeNav} exact>Help</NavLink> <br/>
        <button onClick={props.logOut}>Log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(startLogOut())
})

export { Header };
export default connect(null, mapDispatchToProps)(Header);
