import React from 'react'
import styles from './index.module.css'
import { useQuery } from "@apollo/client"
import { GET_EXPERIENCES } from '../../graphql/queries'
import { Experience } from '../../types/Experience'
import { CheckMarkRow, Typography } from '../../components'

type AppoloExperiences = {
    experiences: Experience[],
}

export const Experiences = () => {
    const { data } = useQuery<AppoloExperiences>(GET_EXPERIENCES)
    const [selectedExperience, setSelectedExperience] = React.useState(0)

    if (!data) return <span>No Data</span>
    const experience = data.experiences[selectedExperience]
    const descriptionItems = experience.description.split('\n')


    return <div className={styles.experiences_container}>
        <div className={styles.all_experiences}>
            {
                data.experiences.map((experience, index) => {
                    return <button
                        key={experience.id}
                        onClick={() => setSelectedExperience(index)}
                        className={`${styles.experience_button} ${index === selectedExperience && styles.experience_selected}`}
                    >
                        <Typography.Caption>{experience.companyName}</Typography.Caption>
                    </button>
                })
            }
        </div>


        <div className={styles.description}>
            <Typography.Title2>{`${experience.position} @ ${experience.companyName}`}</Typography.Title2>
            {
                descriptionItems.map((descriptionItem, index) => <CheckMarkRow key={index} text={descriptionItem} />)
            }
        </div>

    </div>
}