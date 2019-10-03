import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'





const config = {
   apiKey: "AIzaSyCcNBX4UF-bofIBPrP1bUAQ8WaVPJxISfg",
   authDomain: "thunderprice-86f38.firebaseapp.com",
   databaseURL: "https://thunderprice-86f38.firebaseio.com",
   projectId: "thunderprice-86f38",
   storageBucket: "thunderprice-86f38.appspot.com",
   messagingSenderId: "1042643141534",
   appId: "1:1042643141534:web:8d54d24243c2723a210c8f",
   measurementId: "G-LFL9T5V229"
}
firebase.initializeApp(config);






const db = firebase.firestore()
const ref = firebase.storage().ref();

export {
    db,
    ref,
    firebase,
}

export default firebase