
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

    console.log(data);

    if (!data) return <Typography.Title1>No articles found</Typography.Title1>


    return <div className={styles.articles_container}>
        {
            data.articles.map(article => {
                return <div className={styles.article_container}>
                    <img src={article.thumbnail.fieldName.publicUrlTransformed} alt="" className={styles.article_thumbnail} />
                </div>
            })
        }
    </div>
}