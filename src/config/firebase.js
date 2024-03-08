import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCjeD36WIT2gi20MOK0lQvYW0gRmIf9NDA",
    authDomain: "safe-vault-c4633.firebaseapp.com",
    projectId: "safe-vault-c4633",
    storageBucket: "safe-vault-c4633.appspot.com",
    messagingSenderId: "317194094049",
    appId: "1:317194094049:web:3c832d524ab0fc1118fea0"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;