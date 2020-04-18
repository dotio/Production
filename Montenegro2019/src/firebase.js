import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA7q0i6J9F9JI6woADzfDem43umExZ_Ct8',
  authDomain: 'monte-62918.firebaseapp.com',
  databaseURL: 'https://monte-62918.firebaseio.com',
  projectId: 'monte-62918',
  storageBucket: 'monte-62918.appspot.com',
  messagingSenderId: '432556070275',
  appId: '1:432556070275:web:12c232b9d3c9ce89'
};

firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.database();
const firebaseApartments = firebaseDb.ref('apartments');
const firebaseCars = firebaseDb.ref('cars');

export { firebase, firebaseApartments, firebaseCars };
