import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./Login.scss"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(email, password)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Sign in to your account</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label htmlFor="email" className="login__label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login__button">
            Sign in
          </button>
        </form>
        {error && <p className="login__error">{error}</p>}
        <div className="login__signup">
          <Link to="/signup" className="login__signup-link">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

