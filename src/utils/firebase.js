// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDXYFS7fS4vXVRQm62bSOiPbFNcp4PqShw',
  authDomain: 'netflixgpt-803e2.firebaseapp.com',
  projectId: 'netflixgpt-803e2',
  storageBucket: 'netflixgpt-803e2.appspot.com',
  messagingSenderId: '995892764146',
  appId: '1:995892764146:web:a2a948abbe728ad7abdf6b',
  measurementId: 'G-VG11NX6416',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const auth = getAuth()
