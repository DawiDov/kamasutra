import React from "react";
import SideItem from "./SideItem";
import { connect } from "react-redux";
import {
  setFriendsInStateAC,
  setRemoveFromFriendListAC,
} from "../mobx/sidebar-reducer";
import { getFriendsFromServer, removeFollowerFromServer } from "../../api/api";

class SideItemContainer extends React.Component {
  componentDidMount() {
    getFriendsFromServer().then((response) => {
      this.props.setFriends(response.items);
    });
  }

  unFollow = (userId) => {
    removeFollowerFromServer(userId).then((response) => {
      if (response.resultCode === 0) {
        this.props.removeFromFriends(userId);
      }
    });
  };

  render() {
    return <SideItem {...this.props.friends} unFollow={this.unFollow} />;
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (items) => {
      dispatch(setFriendsInStateAC(items));
    },
    removeFromFriends: (userId) => {
      dispatch(setRemoveFromFriendListAC(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideItemContainer);
