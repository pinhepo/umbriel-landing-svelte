// Mutation for sending invite to early adopters
export const SEND_INVITE = `
  mutation SendInvite($email: String!, $name: String!) {
    sendInvite(email: $email, name: $name) {
      token
    }
  }
`; 