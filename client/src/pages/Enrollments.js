import React from "react";
import { Segment, Table } from "semantic-ui-react";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

const Enrollments = () => {
  const getEnrolledUsers = (courseId) => {
    let courseEnrollments = enrollments.filter((e) => e.course_id == courseId);
    let usersData = courseEnrollments.map((ce) => {
      let user = users.find((u) => u.id === ce.user_id);
      return { name: user.name, role: ce.role };
    });
    return usersData;
  };

  const normalizeCourseData = () => {
    let coursesData = courses.map((c) => {
      return { course: c.name, users: getEnrolledUsers(c.id) };
    });

    return coursesData;
  };
  const renderData = () => {
    const courseUsers = normalizeCourseData();
    console.log(courseUsers);
    return courseUsers.map((c) => {
      return (
        <Segment>
          <h1>{c.course}</h1>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {c.users.map((u) => (
                <Table.Row>
                  <Table.Cell>{u.name}</Table.Cell>
                  <Table.Cell>{u.role}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      );
    });
  };
  const { data: enrollments } = useAxiosOnMount("/api/enrollments");
  const { data: users } = useAxiosOnMount("/api/users");
  const { data: courses } = useAxiosOnMount("/api/courses");
  if (!enrollments || !users || !courses) {
    return <p>getting Data</p>;
  }
  return (
    <div>
      <h1>Enrollments</h1>
      <List name="Enrollments" data={enrollments} />
      <List name="Users" data={users} />
      <List name="Courses" data={courses} />
      {renderData()}
    </div>
  );
};

export default Enrollments;
