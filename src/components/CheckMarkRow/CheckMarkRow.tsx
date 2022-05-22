import { AiFillCheckCircle } from 'react-icons/ai'
import { Typography } from '../Typography';
import styles from './index.module.css'

type Props = {
    text: string
}

export const CheckMarkRow = ({ text }: Props) => {
    return (
        <div className={styles.description_item}>
            <div className={styles.check_icon_container}>
                <AiFillCheckCircle size={24} className={styles.check_icon} />
            </div>
            <Typography.Callout2 className={styles.description_text}>{text}</Typography.Callout2>
        </div>
    )

}