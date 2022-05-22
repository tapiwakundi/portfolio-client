
import { Typography } from '../Typography'
import styles from './index.module.css'

type Props = {
    children: string
    index: string
}

export const HeaderTitle = ({ children, index }: Props) => {
    return <div className={styles.header}>
        <div>
            <Typography.LargeTitle className={styles.title}>{children}</Typography.LargeTitle>
            <Typography.LargeTitle className={styles.index}>{index}</Typography.LargeTitle>
        </div>

        <div className={styles.line}></div>
    </div>
}