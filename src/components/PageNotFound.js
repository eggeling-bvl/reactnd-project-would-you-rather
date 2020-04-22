import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display3 text-center">404 ERROR</h1>
                <h1 className="display4 text-center">
                    <Link to="/">Return to Home Page</Link>
                </h1>
            </Fragment>
        );
    }
}

export default PageNotFound;
