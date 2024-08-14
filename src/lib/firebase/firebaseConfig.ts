// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSGx14m6P9WwifV5BP9KkV4DuYNI9EOQk',
  authDomain: 'quickreserve-3a0e5.firebaseapp.com',
  projectId: 'quickreserve-3a0e5',
  storageBucket: 'quickreserve-3a0e5.appspot.com',
  messagingSenderId: '764171698678',
  appId: '1:764171698678:web:91ca25f82da2d3a88147d7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }