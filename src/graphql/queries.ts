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