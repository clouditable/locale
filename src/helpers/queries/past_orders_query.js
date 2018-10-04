import gql from 'graphql-tag'

export const PAST_ORDERS = gql`
query ($index: Int!, $limit: Int!) {
  pastOrders(limit:$limit, index:$index) {
    orderDate
    deliveryType
    earnedPoints
    status
    total
    restaurant {
      name
    }
    uid
  } 
}
`;