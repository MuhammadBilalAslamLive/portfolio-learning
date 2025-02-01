import styles from "./Header.module.css"

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Portfolio</h1>
      {isLoggedIn && (
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  )
}

export default Header