import { Page } from "../../containers"
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../../graphql/queries'
import { CheckMarkRow, Typography } from "../../components"
import { Project as ProjectModel } from "../../types"
import styles from './index.module.css'

type ApolloProject = {
    project: ProjectModel
}

export const Project = () => {
    const { id } = useParams()
    const { data } = useQuery<ApolloProject>(GET_PROJECT, {
        variables: {
            id
        }
    })

    if (!data) return <Typography.Title1>No Data</Typography.Title1>

    const { project } = data

    console.log(project.images[0].fieldName);


    return <Page>
        <Typography.Title1>{project.name}</Typography.Title1>
        <img
            src={project.banner.fieldName.publicUrlTransformed}
            className={styles.banner}
            alt="banner"
        />
        <section>
            <Typography.Title2>Objective</Typography.Title2>
            <Typography.Callout2>{project.objective}</Typography.Callout2>
        </section>

        <section>
            <Typography.Title2>Features</Typography.Title2>
            <div className={styles.features_container}>
                <div>
                    {
                        project.features.split('-').map((feature, index) => feature && <CheckMarkRow key={index} text={feature} />)
                    }
                </div>
                <img src={project.images[0].fieldName.publicUrl} alt="" className={styles.features_image} />

            </div>
        </section>

        <section>
            <Typography.Title2>Challenges & Solutions</Typography.Title2>
            <div className={styles.challenges_container}>
                {
                    project.challenges.map((challenge, index) => {
                        return <div>
                            <div className={styles.challenge_item_header}>
                                <Typography.Title1 className={styles.challenge_index}>{'0' + (index + 1).toString()}</Typography.Title1>
                                <Typography.Caption2>{challenge.name}</Typography.Caption2>
                            </div>
                            <Typography.Callout2>{challenge.description}</Typography.Callout2>
                        </div>
                    })
                }

            </div>
        </section>
    </Page>
}