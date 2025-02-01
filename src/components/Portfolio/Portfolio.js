import styles from "./Portfolio.module.css"

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <section className={styles.about}>
        <h2>About Me</h2>
        <img src="https://via.placeholder.com/150" alt="Profile" className={styles.profilePic} />
        <p>
          Hi, I'm John Doe. I'm a passionate web developer with experience in React, Node.js, and modern web
          technologies. I love creating beautiful and functional web applications that solve real-world problems.
        </p>
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </section>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <h3>Project 1</h3>
            <p>A brief description of Project 1</p>
          </div>
          <div className={styles.project}>
            <h3>Project 2</h3>
            <p>A brief description of Project 2</p>
          </div>
          <div className={styles.project}>
            <h3>Project 3</h3>
            <p>A brief description of Project 3</p>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>Email: john.doe@example.com</p>
        <p>LinkedIn: linkedin.com/in/johndoe</p>
        <p>GitHub: github.com/johndoe</p>
      </section>
    </div>
  )
}

export default Portfolio

