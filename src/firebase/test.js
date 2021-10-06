import firebase from '@firebase/app-compat';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('uWtNGHZyZOSMjiG0jpQ8').collection('cartItem').doc('PmG4UR60zPgNOzmMalT2');
firestore.doc('/users/uWtNGHZyZOSMjiG0jpQ8/cartItem/PmG4UR60zPgNOzmMalT2');
firestore.collection('/users/uWtNGHZyZOSMjiG0jpQ8/cartItem');
