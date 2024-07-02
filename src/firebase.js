// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// import '../public/firebase-messaging-sw'

const firebaseConfig = {
  apiKey: "AIzaSyBMBjnJsOnGzIhy0UKx0J2Ql5Z0DktOgys",
  authDomain: "beltagyapp.firebaseapp.com",
  projectId: "beltagyapp",
  storageBucket: "beltagyapp.appspot.com",
  messagingSenderId: "606900760482",
  appId: "1:606900760482:web:81fbd7720fdfa6233e8cfb",
  measurementId: "G-NN1RMPM9WT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../public/firebase-messaging-sw');
//   });
// }
