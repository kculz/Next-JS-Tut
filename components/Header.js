import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
          <span>Kculz news</span> Connect.
      </h1>
      <p className={styles.description}>Keep up to date with the latest Kculz news connect!</p>
    </div>
  )
}

export default Header
