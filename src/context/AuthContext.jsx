import { createContext, useEffect, useState } from "react"
import { userObserver } from "../auth/firebase"

export const UserContext = createContext()

export const AuthContext = ({ children }) => {
  const [myUser, setMyUser] = useState(true)
  useEffect(() => {
    userObserver(setMyUser)
  }, [])

  return (
    <UserContext.Provider value={{ myUser, setMyUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthContext
