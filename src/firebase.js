/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBK4tShCr6m3bjoH04i5zCe0hIKhq6DmSU',
  authDomain: 'radical-x-apprenticeship.firebaseapp.com',
  projectId: 'radical-x-apprenticeship',
  storageBucket: 'radical-x-apprenticeship.appspot.com',
  messagingSenderId: '325968477669',
  appId: '1:325968477669:web:d471bac0b418d2d2aa430c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
