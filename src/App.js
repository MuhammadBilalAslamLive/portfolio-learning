import { useState } from "react"
import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Signup from "./components/Signup/Signup.js"
import Portfolio from "./components/Portfolio/Portfolio.js"
import styles from "./App.module.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const toggleAuthForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className={styles.app}>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn ? (
        showLogin ? (
          <Login onLogin={handleLogin} onToggle={toggleAuthForm} />
        ) : (
          <Signup onSignup={handleLogin} onToggle={toggleAuthForm} />
        )
      ) : (
        <Portfolio />
      )}
    </div>
  )
}

export default App

