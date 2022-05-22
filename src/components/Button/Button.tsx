import styles from './index.module.css'

type Props = {
    children: string
}
export const Button = ({ children }: Props) => {
    return <button className={styles.button}>
        {children}
    </button>
}