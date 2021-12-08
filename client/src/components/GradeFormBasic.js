import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const GradeFormBasic = (props) => {
  const [userId, setUserId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [score, setScore] = useState("");
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log({ skillId, userId, score });
    props.addGrade({ skill_id: skillId, user_id: userId, score });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>user id</label>
        <Form.Input
          value={userId}
          onChange={(e, { value }) => setUserId(value)}
        />
      </Form.Field>
      <Form.Field>
        <label>skill id</label>
        <Form.Input
          value={skillId}
          onChange={(e, { value }) => setSkillId(value)}
        />
      </Form.Field>
      <Form.Field>
        <label>score</label>
        <Form.Input
          value={score}
          onChange={(e, { value }) => setScore(value)}
        />
      </Form.Field>

      <Button>add</Button>
    </Form>
  );
};

export default GradeFormBasic;
