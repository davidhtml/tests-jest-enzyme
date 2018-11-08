import {firebase, googleAuthProvider} from '../firebase/firebase'

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

const login = (uid) => ({
    type: 'LOGIN',
    uid
});

const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

const logout = () => ({
    type: 'LOG_OUT',
});

export { startLogin, startLogOut, login, logout}
