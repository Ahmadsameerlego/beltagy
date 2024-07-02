importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBMBjnJsOnGzIhy0UKx0J2Ql5Z0DktOgys",
  authDomain: "beltagyapp.firebaseapp.com",
  projectId: "beltagyapp",
  storageBucket: "beltagyapp.appspot.com",
  messagingSenderId: "606900760482",
  appId: "1:606900760482:web:81fbd7720fdfa6233e8cfb",
  measurementId: "G-NN1RMPM9WT",
};
// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
/* eslint-enable */
