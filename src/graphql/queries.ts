import { gql } from "@apollo/client";

export const GET_EXPERIENCES = gql`
query {
    experiences {
      id
      companyName
      description
      position
    }
  }
`

export const GET_PROJECTS = gql`
query {
  projects {
    id
    name
    organization
    shortDescription
    thumbnail {
      fieldName {
        publicUrlTransformed
      }
    }
  }
}
`

export const GET_PROJECT = gql`
query($id: ID ) {
  project(where: {id: $id}) {
    id
    name
    organization
    shortDescription
    thumbnail {
      fieldName {
        publicUrlTransformed
      }
    }
  }
}
`

export const GET_ARTICLES = gql`
query {
  articles {
    id
    url
    thumbnail {
      fieldName {
        publicUrlTransformed
      }
    }
    date
    name
  }
}
`  