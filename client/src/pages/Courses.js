import React from "react";
import SematicLoader from "../components/SemanticLoader";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Card } from "semantic-ui-react";

const Courses = (props) => {
  const { data: courses, loading, error } = useAxiosOnMount("/api/courses");
  const renderCourses = () => {
    if (error) {
      return <p>Error occured getting courses</p>;
    }
    if (loading) {
      return <SematicLoader />;
    }
    return (
      <List
        data={courses}
        name="Course List"
        renderData={(c) => {
          return (
            <Card>
              <Card.Header>{c.name}</Card.Header>
              <Card.Description>id: {c.id}</Card.Description>
            </Card>
          );
        }}
      />
    );
  };
  console.log("courses:", courses);
  return (
    <div>
      <h1>Courses</h1>
      {renderCourses()}
    </div>
  );
};

export default Courses;
