import { gql } from '@apollo/client';

export const CREATE_QUESTION = gql`
  mutation CreateQuestion($input: CreateQuestionDto!) {
    createQuestion(input: $input) {
      id
      content
      createdAt
    }
  }
`;
