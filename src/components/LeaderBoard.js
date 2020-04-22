import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import User from "./User";

class LeaderBoard extends Component {
    render() {

        return (
            <Fragment>
                {this.props.userIDs.map((id) => (
                    <User key={id} id={id} />
                ))}
            </Fragment>
        );
    }
}
function mapStateToProps({ users }) {
    //sort UserIDs by the score for each user, desc
    const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
        const scoreA =
            Object.keys(users[idA].answers).length + users[idA].questions.length;
        const scoreB =
            Object.keys(users[idB].answers).length + users[idB].questions.length;

        return scoreB - scoreA;
    });

    return {
        userIDs: sortedUserIDs
    };
}
export default connect(mapStateToProps)(LeaderBoard);
