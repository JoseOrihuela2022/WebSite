import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBsGufs7Pe4EbyjjtlNoc2p_pPYeNq8fBM",
  authDomain: "images-bb816.firebaseapp.com",
  projectId: "images-bb816",
  databaseURL: "https://images-bb816-default-rtdb.firebaseio.com/",
  storageBucket: "images-bb816.appspot.com",
  messagingSenderId: "728179687078",
  appId: "1:728179687078:web:7797dcd93475ea88bc3e67"
};

export const app = initializeApp(firebaseConfig)