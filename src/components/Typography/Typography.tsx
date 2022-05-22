import styles from './index.module.css'

type Props = {
    children: string;
    className?: string;
}

export const Typography = () => { }


const LargeTitle = ({ children, className }: Props) => {
    return <h1 className={`${styles.largeTitle} ${className}`}>{children}</h1>
}

const Title1 = ({ children, className }: Props) => {
    return <h1 className={`${styles.title1} ${className}`}>{children}</h1>
}

const Title2 = ({ children, className }: Props) => {
    return <h1 className={`${styles.title2} ${className}`}>{children}</h1>
}

const Caption = ({ children }: Props) => {
    return <span className={styles.caption}>{children}</span>
}

const Caption2 = ({ children, className }: Props) => {
    return <span className={`${styles.caption2} ${className}`}>{children}</span>
}

const Headline = ({ children }: Props) => {
    return <span className={styles.headline}>{children}</span>
}

const Callout = ({ children }: Props) => {
    return <span className={styles.callout}>{children}</span>
}

const Callout2 = ({ children, className }: Props) => {
    return <span className={`${styles.callout2} ${className}`}>{children}</span>
}
Typography.LargeTitle = LargeTitle
Typography.Title1 = Title1
Typography.Title2 = Title2
Typography.Caption = Caption
Typography.Caption2 = Caption2
Typography.Headline = Headline
Typography.Callout = Callout
Typography.Callout2 = Callout2