import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setFriendsInStateAC,
  setRemoveFromFriendListAC,
} from "../mobx/sidebar-reducer";
import {
  CAFollowed,
  CASetCurrentPage,
  CASetUsers,
  CAUnfollowed,
  CASetTotalUsersCount,
  CASetIsFetchingCount,
  CAToggleIsFollowingInProgres,
} from "../mobx/users-reducer";
import {
  getUsers,
  getFollower,
  removeFollower,
  getFriends,
} from "../../api/api";

export const getUserForAddFriendList = (user) => {
  return user;
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetchingCount(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.setIsFetchingCount(false);
      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetchingCount(true);
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setIsFetchingCount(false);
      this.props.setUsers(response.items);
    });
  };

  follow = (userId) => {
    this.props.onfollowingInProgres(userId, true);
    getFollower(userId).then((response) => {
      if (response.resultCode === 0) {
        this.props.addAsFriends(userId);
        this.props.onfollowingInProgres(userId, false);
      }
    });
    getFriends().then((response) => {
      this.props.setFriends(response.items);
    });
  };

  unFollow = (userId) => {
    this.props.onfollowingInProgres(userId, true);
    removeFollower(userId).then((response) => {
      if (response.resultCode === 0) {
        this.props.removeFromFriends(userId);
        this.props.removeFromFriendList(userId);
        this.props.onfollowingInProgres(userId, false);
      }
    });
  };

  render() {
    return (
      <Users
        isFetching={this.props.isFetching}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        unFollow={this.unFollow}
        follow={this.follow}
        followingInProgres={this.props.followingInProgres}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
    followingInProgres: state.usersData.followingInProgres,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addAsFriends: (userId) => {
      dispatch(CAFollowed(userId));
    },
    removeFromFriends: (userId) => {
      dispatch(CAUnfollowed(userId));
    },
    setUsers: (users) => {
      dispatch(CASetUsers(users));
    },
    setCurrentPage: (page) => {
      dispatch(CASetCurrentPage(page));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(CASetTotalUsersCount(totalCount));
    },
    setIsFetchingCount: (isFetching) => {
      dispatch(CASetIsFetchingCount(isFetching));
    },
    onfollowingInProgres: (userId, isFetching) => {
      dispatch(CAToggleIsFollowingInProgres(userId, isFetching));
    },
    setFriends: (users) => {
      dispatch(setFriendsInStateAC(users));
    },
    removeFromFriendList: (userId) => {
      dispatch(setRemoveFromFriendListAC(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
