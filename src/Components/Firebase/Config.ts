import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase

firebase.initializeApp({
    apiKey: "AIzaSyAaT6mj9ViVMWJwGNbmn9E5Cdjz3vqAykY",
    authDomain: "cms-ticket-d7e40.firebaseapp.com",
    projectId: "cms-ticket-d7e40",
    storageBucket: "cms-ticket-d7e40.appspot.com",
    messagingSenderId: "329442750835",
    appId: "1:329442750835:web:4a388ac209e4015e905506"
})
// chỗ này a phải set cho nó truyền vô key của  firebase mình cần
const storeQuanLyVe = firebase.firestore().collection("QuanLyVe");
const storeDoiSoatVe = firebase.firestore().collection("DoiSoatVe");
const storeGoiDichVu = firebase.firestore().collection("GoiDichVu");
 



export { storeQuanLyVe,storeDoiSoatVe,storeGoiDichVu}
export default firebase;