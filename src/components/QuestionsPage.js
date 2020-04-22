import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class QuestionsPage extends Component {
    render() {

        const { authedUserAnswers, match } = this.props;
        const id = match.params.id;
        const answered = authedUserAnswers.hasOwnProperty(id) ? true : false;
        return (
            <Fragment>
                <h2 className="text-center my-3">
                    <small>Would You Rather...</small>
                </h2>
                {answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
            </Fragment>
        );
    }
}
function mapStateToProps({authedUser,users}){
    const authedUserAnswers=users[authedUser].answers;
    return {authedUserAnswers};

}

export default connect(mapStateToProps)(QuestionsPage);
