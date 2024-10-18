import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderDto!) {
    createOrder(input: $input) {
      id
      name
      email
      company
      cardNumber
      cardType
      purchaseOrder
      fileUrl
      material
    }
  }
`;

// Get Orders for User Query
export const GET_USER_ORDERS = gql`
  query GetOrdersForUser {
    getOrdersForUser {
      id
      name
      email
      material
      company
      cardType
      fileUrl
      createdAt
    }
  }
`;