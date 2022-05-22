
import { Typography } from '../../components'
import styles from './index.module.css'
import { useQuery } from '@apollo/client'
import { GET_ARTICLES } from '../../graphql/queries'
import { Article } from '../../types'

type ApolloArticles = {
    articles: Article[]
}

export const Articles = () => {
    const { data } = useQuery<ApolloArticles>(GET_ARTICLES)

    if (!data) return <Typography.Title1>No articles found</Typography.Title1>


    return <div className={styles.articles_container}>
        {
            data.articles.map(article => {
                return <a
                    key={article.id}
                    className={styles.article_container}
                    href={article.url}
                    target="_blank" rel="tapiwakundi.com noreferrer"
                >
                    <img src={article.thumbnail.fieldName.publicUrlTransformed} alt="" className={styles.article_thumbnail} />
                    <div className={styles.text_container}>
                        <Typography.Caption2>{article.name}</Typography.Caption2>
                        <Typography.Callout2>{article.date}</Typography.Callout2>
                    </div>
                </a>
            })
        }
    </div>
}