import React, { useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";
import StringifyJson from "./StringifyJson";

const GradeForm = (props) => {
  const [userId, setUserId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [score, setScore] = useState("");
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log({ skillId, userId, score });
    props.addGrade({ skill_id: skillId, user_id: userId, score });
  };
  const normailizeUsers = () => {
    return props.users.map((u) => {
      return { key: u.id, value: u.id, text: u.name };
    });
  };

  const normailizeSkills = () => {
    return props.skills.map((s) => {
      return { key: s.id, value: s.id, text: s.name };
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>user id: {userId}</label>
          <Select
            options={normailizeUsers()}
            onChange={(e, { value }) => setUserId(value)}
          />
        </Form.Field>
        <Form.Field>
          <label>skill id : {skillId}</label>
          <Select
            options={normailizeSkills()}
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
    </div>
  );
};

export default GradeForm;
