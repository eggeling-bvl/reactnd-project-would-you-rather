import React, {Component} from 'react';
import {connect} from "react-redux";

class Nav extends Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
                    <Navbar.Brand as={Link} to="/">
                        <h2>
                            <small>WYR...?</small>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/add">
                                New Question
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/leaderboard">
                                Leaderboard
                            </Nav.Link>
                        </Nav>
                        <Nav className="align-items-start">
                            <Navbar.Text>{user.name}</Navbar.Text>
                            <Avatar avatarURL={user.avatarURL} className="mx-3" />
                            <Button
                                variant="outline-dark"
                                onClick={handleLogout}
                                className="mt-3 mt-lg-0"
                            >
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser]
    };
}
export default connect(mapStateToProps)(Nav);
