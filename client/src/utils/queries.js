import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ORDERS = gql`
  query getOrders {
    orders {
      _id
      width
      height
      price
      text
    }
  }
`;

export const QUERY_SINGLE_ORDER = gql`
  query getSingleOrder($orderId: ID!) {
    order(orderId: $orderId) {
      _id
      width
      height
      price
      text
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
