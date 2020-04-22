import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared";
import Login from "./components/Login";
import Home from "./components/Home";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }


render() {
    const { authedUser} = this.props;

  return(
      <Fragment>{!authedUser ? <Login /> : <Home />}</Fragment>

  )
}
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(App);
