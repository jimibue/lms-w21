import React from "react";
import SematicLoader from "../components/SemanticLoader";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Card } from "semantic-ui-react";

const Skills = () => {
  const { data, error, loading } = useAxiosOnMount("/api/skills");

  const renderSkills = () => {
    if (error) {
      return <p>error occured</p>;
    }
    if (loading) {
      return <SematicLoader />;
    }

    return (
      <List
        data={data}
        name="Skills"
        renderData={(skill) => {
          return (
            <Card>
              <Card.Header>{skill.name}</Card.Header>
              <Card.Description>{skill.description}</Card.Description>
            </Card>
          );
        }}
      />
    );
  };

  return (
    <div>
      <h1>Skills page</h1>
      {renderSkills()}
    </div>
  );
};

export default Skills;
