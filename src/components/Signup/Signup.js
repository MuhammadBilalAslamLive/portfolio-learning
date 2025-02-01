import { useState } from "react"
import styles from "./Signup.module.css"

function Signup({ onSignup, onToggle }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your signup logic here
    onSignup()
  }

  return (
    <div className={styles.signup}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={onToggle}>Login</button>
      </p>
    </div>
  )
}

export default Signup

