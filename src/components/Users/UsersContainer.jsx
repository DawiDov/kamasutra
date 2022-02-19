import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  getUsers,
  flipping,
  subToUser,
  unfollowUser,
} from "../mobx/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.flipping(pageNumber, this.props.pageSize);
  };

  follow = (userId) => {
    this.props.subToUser(userId);
  };

  unFollow = (userId) => {
    this.props.unfollowUser(userId);
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
export default connect(mapStateToProps, {
  getUsers,
  flipping,
  subToUser,
  unfollowUser,
})(UsersContainer);
