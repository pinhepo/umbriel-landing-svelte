import { gql } from 'graphql-request';

// Mutation for sending invite to early adopters
export const SEND_INVITE = gql`
  mutation SendInvite($email: String!, $name: String!) {
    sendInvite(email: $email, name: $name) {
      token
    }
  }
`; 