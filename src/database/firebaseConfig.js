import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyClkdz6tHH0vp8dsKoXvJfvzn7IRUXk38M',
  projectId: 'esp-test-71219',
  storageBucket: 'esp-test-71219.appspot.com',
  appId: '1:776839629556:android:73281a3fa47fd4eb39aca1',
  messagingSenderId: '776839629556',
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}