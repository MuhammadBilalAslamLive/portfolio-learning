import { useAuth } from "../../contexts/AuthContext"
import "./LandingPage.scss"

function LandingPage() {
  const { currentUser } = useAuth()

  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <div className="landing-page__profile">
          <img className="landing-page__avatar" src="https://via.placeholder.com/150" alt="Profile" />
          <h1 className="landing-page__name">{currentUser.name || "John Doe"}</h1>
          <p className="landing-page__title">Web Developer</p>
        </div>
        <div className="landing-page__about">
          <h2 className="landing-page__section-title">About Me</h2>
          <p className="landing-page__description">
            I'm a passionate web developer with experience in React, Node.js, and modern web technologies. I love
            creating beautiful and functional web applications that solve real-world problems.
          </p>
        </div>
        <div className="landing-page__skills">
          <h2 className="landing-page__section-title">Skills</h2>
          <div className="landing-page__skill-list">
            {["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"].map((skill) => (
              <span key={skill} className="landing-page__skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

