import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../mobx/profile-reducer";
import { withRouter } from "react-router-dom";
import { getUser } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userid;
    if (!userId) userId = 2;
    getUser(userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
