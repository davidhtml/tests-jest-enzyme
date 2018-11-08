import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';


const PublicRoute = (props) => {
    const { isAuthenticated, component: Component, ...rest} = props;
    return  <Route {...rest} component={(props) => {
            return isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
            }}/>
}




const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export { PublicRoute }
export default connect(mapStateToProps)(PublicRoute);
