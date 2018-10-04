import gql from 'graphql-tag'

export const PROFILE = gql`
query  {
user{
  addresses {
    addressLine1,
    addressLine2,
    city {
    id,
    name
  },
    country {
      id,
      isoCode,
      name
    },
    default,
    flatNumber,
    fullName,
    geoEnabled,
    id,
    lat,
    long,
    postalCode,
    title
  }
  email
  firstName
  lastName
  mobileNumber
  points
  uid
  }
 } 
`;
