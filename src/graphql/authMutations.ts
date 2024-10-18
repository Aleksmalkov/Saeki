import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginDto!) {
    login(input: $input) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterDto!) {
    register(input: $input) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;