import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div>
            {/* <Link to="/dashboard">
                <button onClick>Login</button>
            </Link> */}
            <button onClick={props.startLogin}>Login</button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
});

export { LoginPage };
export default connect(null, mapDispatchToProps)(LoginPage);
