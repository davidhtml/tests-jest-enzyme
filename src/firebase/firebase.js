import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { googleAuthProvider, firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// const returnNewArr = (snapshot) => {
//     const expensesNew = [];
//     snapshot.forEach((item) => {
//         expensesNew.push({
//             id: item.key,
//             ...item.val()
//         })
//     })
//     console.log(expensesNew)
// }
//
// database.ref('expenses').on('value', returnNewArr);

//
// setTimeout(() => {
//     database.ref('age').set(36)
// }, 3500)
//
// setTimeout(() => {
//     database.ref().off('value', onValChange);
// }, 5000)
//
//
// setTimeout(() => {
//     database.ref('age').set(40)
// }, 7500)



//TODO fetching data
// database.ref('location/city').once("value")
//     .then((snapshot) => {
//         console.log(snapshot.val())
//         const val = snapshot.value;
//     })
//     .catch((e) => console.log('Eroras =>', e));

// database.ref().set({
//     name: 'James bond',
//     age: 26,
//     location: {
//         city: 'Vilnius',
//         country: 'Lithuania'
//     }
// })
// .then(() => console.log('data has been successfully saved'))
// .catch((e) => console.log('cathcing error =>', e))
//
//
// database.ref().update({
//     name: 'Mike',
//     job: 'software developer',
//     age: null,
//     'location/city': 'USA'
//
// })
