import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expense.React app</h1>
                </Link>
                {/* <NavLink to="/create" activeClassName="selected" activeStyle={activeNav} exact>Create expense</NavLink> <br/> */}
                {/* <NavLink to="/help" activeClassName="selected" activeStyle={activeNav} exact>Help</NavLink> <br/> */}
                <button className="button button--link" onClick={props.logOut}>Log out</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(startLogOut())
})

export { Header };
export default connect(null, mapDispatchToProps)(Header);
