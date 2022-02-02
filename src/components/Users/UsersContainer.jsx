import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {CAFollowed, CASetCurrentPage, CASetUsers, CAUnfollowed, CASetTotalUsersCount, CASetIsFetchingCount} from "../mobx/users-reducer";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetchingCount(!this.props.isFetching)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetchingCount(!this.props.isFetching)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetchingCount(!this.props.isFetching)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetchingCount(!this.props.isFetching)
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users onPageChanged={ this.onPageChanged }
                          users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          removeFromFriends={this.props.removeFromFriends}
                          addAsFriends={this.props.addAsFriends}
                        />
            </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addAsFriends: (userId) => {
            dispatch(CAFollowed(userId))
        },
        removeFromFriends: (userId) => {
            dispatch(CAUnfollowed(userId))
        },
        setUsers: (users) => {
            dispatch(CASetUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(CASetCurrentPage(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(CASetTotalUsersCount(totalCount))
        },
        setIsFetchingCount: (isFetching) => {
            dispatch(CASetIsFetchingCount(isFetching))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer)
