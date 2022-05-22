import styles from './index.module.css'
const LOGO = require('../../assets/logo.svg').default

export const Logo = () => {
    return (
        <a href="/" className={styles.logo}>
            <img src={LOGO} alt="logo" className={styles.image} />
        </a>
    )
}