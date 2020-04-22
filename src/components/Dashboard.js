import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Question from "./Question";

class Dashboard extends Component {

    getUnansweredQ = ()=>{
        const { questionIds, answers } = this.props
        return questionIds.filter((ele)=>
        {
            return Object.keys(answers).indexOf(ele)<0
        },Object.keys(answers))
    }
    //To filter out answered questions
    getAnsweredQ = ()=>{
        const { questionIds, answers } = this.props
        return questionIds.filter((id)=>{
            return answers.hasOwnProperty(id)
        })
    }
    render() {
        const unanweredQ = this.getUnansweredQ()
        const answeredQ =  this.getAnsweredQ()

        return (
            <Fragment>
                <Tabs>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                        {unanweredQ.map((id) => <Question key={id} id={id}/>)}
                    </Tab>
                    <Tab eventKey="answered" title="Answered Questions">
                        {answeredQ.map((id) => <Question key={id} id={id}/>)}
                    </Tab>

                </Tabs>
            </Fragment>
        );
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    const answers=(!authedUser)
        ? []
        :users[authedUser].answers
    return{
        questionIds : Object.keys(questions)
            .sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        answers,
    }
}

export default connect(mapStateToProps)(Dashboard);
