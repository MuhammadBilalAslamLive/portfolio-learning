import React, { useContext, useState, useEffect } from "react"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  function signup(email, password) {
    // Implement signup logic here
    return Promise.resolve()
  }

  function login(email, password) {
    // Implement login logic here
    return Promise.resolve()
  }

  function logout() {
    // Implement logout logic here
    return Promise.resolve()
  }

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

