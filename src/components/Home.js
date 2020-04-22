import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LeaderBoard from "./LeaderBoard";
import Container from "react-bootstrap/Container";
import Navi from "./Navi";
import NewQuestion from "./NewQuestion";
import QuestionsPage from "./QuestionsPage";
import PageNotFound from "./PageNotFound";


class Home extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Navi/>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/questions/:id" component={QuestionsPage} />
                    <Route path="/add" component={NewQuestion} />
                    <Route path="/leaderboard" exact component={LeaderBoard} />
                    <Route component={PageNotFound} />
                </Switch>
                </Container>
            </Router>
        );
    }
}

export default Home;
