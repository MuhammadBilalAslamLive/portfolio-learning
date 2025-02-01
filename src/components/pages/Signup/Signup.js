import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./Signup.scss"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { signup } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signup(email, password)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <h2 className="signup__title">Create your account</h2>
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__form-group">
            <label htmlFor="email" className="signup__label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="signup__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup__form-group">
            <label htmlFor="password" className="signup__label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="signup__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup__button">
            Sign up
          </button>
        </form>
        {error && <p className="signup__error">{error}</p>}
        <div className="signup__login">
          <Link to="/login" className="signup__login-link">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup

