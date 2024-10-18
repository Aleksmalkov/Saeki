import { gql } from '@apollo/client';

export const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    getAllOrders {
      id
      name
      email
      material
      fileUrl
      createdAt
    }
  }
`;
