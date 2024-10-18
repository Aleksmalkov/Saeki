import { gql } from '@apollo/client';

export const GET_QUESTIONS_FOR_ORDER = gql`
  query GetQuestionsForOrder($orderId: String!) {
    getQuestionsForOrder(orderId: $orderId) {
      id
      content
      user {
        name
      }
      createdAt
    }
  }
`;
