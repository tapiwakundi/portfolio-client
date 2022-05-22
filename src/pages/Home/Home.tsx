import { useQuery } from "@apollo/client"
import { Typography } from "../../components"
import { Page } from "../../containers"
import styles from './index.module.css'


export const Home = () => {
    return <Page>
        <section className={styles.hero_container}>
            <Typography.Callout>Hello, my name is</Typography.Callout>
            <Typography.LargeTitle>Tapiwa, Kundishora</Typography.LargeTitle>

        </section>
    </Page>
}