import { initializeApp } from "firebase/app"
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
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
export const auth = getAuth(app)

export const signInWithGoogle = (navgite) => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      navgite("/")
    })
    .catch((error) => {
      console.log(error)
    })
}

export const userObserver = async (setMyUser) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user
      setMyUser({ email, displayName, photoURL })
      console.log(user)
    } else {
      setMyUser(false)
      console.log("user signed out")
    }
  })
}

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
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