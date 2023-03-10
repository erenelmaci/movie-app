import React from "react"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const AuthContext = () => {
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
  const analytics = getAnalytics(app)
  return (
    <div>
      <h1>{firebaseConfig.apiKey}</h1>
      <h1>{firebaseConfig.authDomain}</h1>
      <h1>{firebaseConfig.projectId}</h1>
      <h1>{firebaseConfig.storageBucket}</h1>
      <h1>{firebaseConfig.messagingSenderId}</h1>
    </div>
  )
}

export default AuthContext
