import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense React.app</h1>
                <button className="button" onClick={props.startLogin}>Login with Google</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
});

export { LoginPage };
export default connect(null, mapDispatchToProps)(LoginPage);
