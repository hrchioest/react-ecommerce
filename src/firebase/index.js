import * as firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: 'react-ecommerce-740c2.firebaseapp.com',
    databaseURL: 'https://react-ecommerce-740c2.firebaseio.com',
    projectId: 'react-ecommerce-740c2',
    storageBucket: 'react-ecommerce-740c2.appspot.com',
    messagingSenderId: '381973464289',
    appId: '1:381973464289:web:fc3a2065c6796f9ec823a0',
    measurementId: 'G-GPGYL05WW9',
})

export function getFirebase() {
    return app
}
export function getFirestore() {
    return firebase.firestore(app)
}
