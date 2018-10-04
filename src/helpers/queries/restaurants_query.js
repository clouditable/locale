import gql from 'graphql-tag'

export const RESTAURANTS = gql`
query ($index: Int!, $limit: Int!, $delivery: Boolean!, $showOffline: Boolean!) {
restaurants(limit:$limit, index:$index, delivery:$delivery, showOffline:$showOffline) {
  avgScore
  distance
  minOrderAmount
  name
  picture {
    alt,
    bundle,
    height,
    id,
    title,
    url,
    width
  }
  types {
    id,
    name
  }
  uid
  } 
}
`;
