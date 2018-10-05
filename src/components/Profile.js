import React, { Component } from 'react';
import { Query } from 'react-apollo';

import ProfileForm from './ProfileForm';
import { PROFILE } from '../helpers/queries/profile_query';
import Loading from './Loading';

class Profile extends Component {
  render() {

    return (
      <Query query={PROFILE} fetchPolicy="network-only">
        {({ loading, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (data && data.user) {
            return <ProfileForm user={data.user}/>;
          } else {
            return (
              <div className="container emp-profile" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <p>No User Found</p>
              </div>
            )
          }
        }}
      </Query>
    );
  }
}

export default Profile;