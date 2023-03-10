// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

require("dotenv").config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

console.log(firebaseConfig.apiKey)
console.log(firebaseConfig.authDomain)
console.log(firebaseConfig.projectId)
console.log(firebaseConfig.storageBucket)
console.log(firebaseConfig.messagingSenderId)
console.log(firebaseConfig.appId)
console.log(firebaseConfig.measurementId)

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
