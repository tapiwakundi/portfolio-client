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

        <section className={styles.overview_section}>
            <div>
                <div>
                    <Typography.Caption>Major Tasks</Typography.Caption>
                    <div className={styles.major_tasks_container}>
                        {
                            project.majorTasks.split('-').map(task => {
                                return task && <li className={styles.task}>
                                    <Typography.Callout2>{task}</Typography.Callout2>
                                </li>
                            })
                        }
                    </div>

                </div>

                <div className={styles.column}>
                    <Typography.Caption>Name</Typography.Caption>
                    <Typography.Callout2>{project.name}</Typography.Callout2>
                </div>

            </div>
            <div>
                <div className={styles.column}>
                    <Typography.Caption>Organization</Typography.Caption>
                    <Typography.Callout2>{project.organization}</Typography.Callout2>
                </div>

                <div className={styles.column}>
                    <Typography.Caption>Tech Stack</Typography.Caption>
                    <div >
                        {
                            project.technologies.split(',').map(task => {
                                return task && <li className={styles.task}>
                                    <Typography.Callout2>{task}</Typography.Callout2>
                                </li>
                            })
                        }
                    </div>

                </div>

                <div className={styles.column}>
                    <Typography.Caption>Year</Typography.Caption>
                    <Typography.Callout2>{project.year.toString()}</Typography.Callout2>
                </div>
            </div>
        </section>

        {/* <section className={styles.images_grid}>
            <img
                src={project.images[1].fieldName.publicUrl}
                style={{ flex: 3 }}
                className={styles.extra_image} alt="" />
            <img src={project.images[2].fieldName.publicUrl}
                style={{ flex: 1 }}

                className={styles.extra_image} alt="" />

        </section> */}
    </Page>
}