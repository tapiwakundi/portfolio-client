import React from 'react'
import styles from './index.module.css'
import { useQuery } from "@apollo/client"
import { GET_EXPERIENCES } from '../../graphql/queries'
import { Experience } from '../../types/Experience'
import { Typography } from '../../components'
import { AiFillCheckCircle } from 'react-icons/ai'

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
                        onClick={() => setSelectedExperience(index)}
                        className={`${styles.experience_button} ${index === selectedExperience && styles.experience_selected}`}>
                        <Typography.Caption>{experience.companyName}</Typography.Caption>
                    </button>
                })
            }
        </div>


        <div className={styles.description}>
            <Typography.Title1>{`${experience.position} @ ${experience.companyName}`}</Typography.Title1>
            {
                descriptionItems.map((descriptionItem, index) => {
                    return <div className={styles.description_item}>
                        <div className={styles.check_icon_container}>
                            <AiFillCheckCircle size={24} className={styles.check_icon} />

                        </div>
                        <Typography.Callout2 className={styles.description_text}>{descriptionItem}</Typography.Callout2>
                    </div>
                })
            }
        </div>

    </div>
}