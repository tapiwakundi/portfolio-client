import React from 'react'
import { Typography } from '../../components'
import styles from './index.module.css'

export const Footer = () => {
    return <section className={styles.footer}>
        <Typography.Title1>Let's get connected.</Typography.Title1>
        <Typography.Callout2>Please dont hesitate to reach out. You can email me at <a href="mailto:tapiwakundi@gmail.com">tapiwakundi@gmail.com</a> or connect on <a href="https://www.linkedin.com/in/tapiwa-kundishora-7b8223176/" target="_blank" rel="noreferrer">Linkedin</a>. If you'd like to take a look at my resume please click <a href="https://res.cloudinary.com/dnmlpwow2/image/upload/v1653242303/portfolio/Tapiwa_Resume_May_2022_a6v3ef.pdf"
            download target="_blank" rel="noreferrer">here</a>. I look forward to hearing form you!</Typography.Callout2>
    </section>
}