import { initializeApp } from "firebase/app"
import {
  getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
const app = initializeApp(firebaseConfig)
console.log(app);
export const auth = getAuth()

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL
      
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("ProfilePic", profilePic)
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error)
    })
}

// const sendPasswordReset = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Password reset email sent!
//     })
//     .catch((error) => {
//       const errorMessage = error.message
//       // ..
//     })
// }

// const signOutUser = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     })
// }

// const signInWithEmail = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

// const createUser = async (email, password) => {
//   try {
//     let userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     )
//   } catch (err) {
//     alert(err.message)
//   }
// }
