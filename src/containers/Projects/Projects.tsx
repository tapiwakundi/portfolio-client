import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../../graphql/queries'
import styles from './index.module.css'
import { Project } from '../../types'
import { Typography } from '../../components'

type ApolloProject = {
    projects: Project[],
}

export const Projects = () => {
    const { data } = useQuery<ApolloProject>(GET_PROJECTS)

    if (!data) return <Typography.Title1>No Data</Typography.Title1>
    const colors = ['#ED7937', '#1DB954']

    return <div className={styles.projects_container}>
        {
            data.projects.map((project, index) => {
                return <div
                    key={project.id}
                    className={styles.project_container}
                    style={{ backgroundColor: colors[index] }}
                >
                    <div className={styles.left}>
                        <Typography.Title1>{project.name}</Typography.Title1>
                        <Typography.Callout2>{project.shortDescription}</Typography.Callout2>
                        <img src={project.thumbnail.fieldName.publicUrlTransformed} alt='' className={styles.project_thumbnail_mobile} />

                        <a href={`/project/${project.id}`} className={styles.button}>
                            Learn more
                        </a>
                    </div>
                    <img src={project.thumbnail.fieldName.publicUrlTransformed} alt='' className={styles.project_thumbnail} />
                </div>
            })
        }
    </div>
}