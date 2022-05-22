import { Page } from "../../containers"
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../../graphql/queries'
import { Typography } from "../../components"
import { Project as ProjectModel } from "../../types"

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


    return <Page>
        <Typography.Title1>{data.project.name}</Typography.Title1>
    </Page>
}