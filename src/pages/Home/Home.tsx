import { HeaderTitle, Typography } from "../../components"
import { Experiences, Page, Projects, Articles } from "../../containers"
import styles from './index.module.css'

export const Home = () => {
    return <Page>
        <section className={styles.hero_container}>
            <Typography.Caption>Hello, my name is</Typography.Caption>
            <Typography.LargeTitle className={styles.name}>Tapiwa Kundishora</Typography.LargeTitle>
            <Typography.LargeTitle className={styles.headline}>I build servers, apps and websites</Typography.LargeTitle>
            <Typography.Callout2 className={styles.description}>I’m a software engineer with 3 years of experience designing and building software. I’m well versed in JavaScript, C++ and Python. </Typography.Callout2>
            <a href="#projects" className={styles.button}>
                See Projects
            </a>
        </section>

        <section className={styles.experiences_container} id="experience">
            <HeaderTitle index='01'>Experience.</HeaderTitle>
            <Experiences />
        </section>

        <section className={styles.projects_container} id="projects">
            <HeaderTitle index='02'>Projects.</HeaderTitle>
            <Projects />
        </section>

        <section className={styles.articles_container} id="articles">
            <HeaderTitle index='03'>Articles.</HeaderTitle>
            <Articles />
        </section>
    </Page>
}