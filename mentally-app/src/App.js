import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Signup from './Components/Signup';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF1OsXCsKCQkodx3UbwS6tWSzBLpEvrMk",
  authDomain: "mentally-ee47e.firebaseapp.com",
  projectId: "mentally-ee47e",
  storageBucket: "mentally-ee47e.appspot.com",
  messagingSenderId: "907339178205",
  appId: "1:907339178205:web:31983aa93b691ccafdfb34",
  measurementId: "G-2GW1PMSV2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
      <Signup/>
      <Contact/>
      <Contact/>
    </div>
  );
}

export default App;
