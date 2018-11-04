/// HOC - higher order compenent -
//is a react compoenent that render other component
// HOC purpose -
        //resuse  code
        //render hijacking
        //Prop manipulation
        //Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Infor HOC</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information, please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated
                ? <WrappedComponent {...props}/>
                : <p>Sorry you don't have access! :P</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo info="these are the deatils" isAdmin={true}/>, document.querySelector('#root'));
ReactDOM.render(<AuthInfo info="these are the deatils" isAuthenticated={false}/>, document.querySelector('#root'));
