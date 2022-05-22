import React from 'react'
import styles from './index.module.css'
import { Logo } from '../../components/Logo'
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai'

export const NavBar = () => {
    return <nav className={styles.nav_container}>
        <Logo />
        <div className={styles.nav_options}>
            <a href="#about" className={styles.nav_item}>about</a>
            <a href="#experience" className={styles.nav_item}>experience</a>
            <a href="#projects" className={styles.nav_item}>projects</a>
            <a href="#articles" className={styles.nav_item}>articles</a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://res.cloudinary.com/dnmlpwow2/image/upload/v1653242303/portfolio/Tapiwa_Resume_May_2022_a6v3ef.pdf"
                download
                className={styles.nav_item}
            >
                resume
            </a>

        </div>
        <div className={styles.nav_socials}>
            <a href="https://www.linkedin.com/in/tapiwa-kundishora-7b8223176/" target="_blank" rel="noreferrer">
                <AiFillLinkedin size={24} />
            </a>
            <a href="https://medium.com/@tapiwakundi" target="_blank" rel="noreferrer">
                <AiFillMediumSquare size={24} />
            </a>
            <a href="https://github.com/tapiwakundi" target="_blank" rel="noreferrer">
                <AiFillGithub size={24} />
            </a>
            <div className={styles.line}></div>
        </div>

    </nav>
}