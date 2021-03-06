import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Menu>
        <Link to="/">
          <Menu.Item active={location.pathname == "/"}>Home</Menu.Item>
        </Link>
        <Link to="/things">
          <Menu.Item active={location.pathname == "/things"}>Things</Menu.Item>
        </Link>
        <Link to="/courses">
          <Menu.Item active={location.pathname == "/courses"}>
            Courses
          </Menu.Item>
        </Link>
        <Link to="/enrollments">
          <Menu.Item active={location.pathname == "/enrollments"}>
            Enrollments
          </Menu.Item>
        </Link>
        <Link to="/users">
          <Menu.Item active={location.pathname == "/users"}>Users</Menu.Item>
        </Link>
        <Link to="/skills">
          <Menu.Item active={location.pathname == "/skills"}>Skills</Menu.Item>
        </Link>
        <Link to="/grades">
          <Menu.Item active={location.pathname == "/grades"}>Grades</Menu.Item>
        </Link>
        <Link to="/components">
          <Menu.Item active={location.pathname == "/components"}>
            Components
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
