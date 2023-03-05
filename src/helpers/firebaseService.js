import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAZ8Wq5EFpiszT-igiJR0tfOhfFjLMYPNw",
    authDomain: "signup-54cbf.firebaseapp.com",
    databaseURL: "https://signup-54cbf.firebaseio.com",
    storageBucket: "signup-54cbf.appspot.com",
    messagingSenderId: "267037694208"
};
firebase.initializeApp(config);
export class FirebaseService {

    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }

}