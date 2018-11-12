import {firebase, googleAuthProvider} from '../firebase/firebase'

const startLogin = () => {
    googleAuthProvider.setCustomParameters({
         'prompt': 'select_account'
     });
     return () => {
         console.log('WHEN WE FIRE THIS EVENT?')
         return firebase.auth().signInWithRedirect(googleAuthProvider);
     };
}

const login = (uid) => ({
    type: 'LOGIN',
    uid
});

const startLogOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

const logout = () => ({
    type: 'LOG_OUT',
});

export { startLogin, startLogOut, login, logout}
