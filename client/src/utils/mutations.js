import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        isadmin
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($width:Int,$height:Int,$price:Int, $text: String) {
    addOrder(width: $width, height: $height, price: $price, text: $text) {
      _id 
    width
    height
    price
    text
    }
  }
`;

export const REMOVE_ORDER = gql`
mutation removeOrder ($orderId: ID!){
removeOrder(orderId: $orderId){
  _id 
    width
    height
    price
    text
      
}
}
`
