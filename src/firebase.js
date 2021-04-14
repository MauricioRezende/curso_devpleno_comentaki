import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
apiKey: "AIzaSyCrTujPsS-g06qQlGHiJx8i4U1EutxTP04",
authDomain: "comentaki-309f6.firebaseapp.com",
projectId: "comentaki-309f6",
storageBucket: "comentaki-309f6.appspot.com",
messagingSenderId: "321996722077",
appId: "1:321996722077:web:6d6fa4d7876b38a9406974"
}

firebase.initializeApp(firebaseConfig)

export default firebase