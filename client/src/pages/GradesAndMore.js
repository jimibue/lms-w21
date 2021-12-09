import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Divider, Form, Select } from "semantic-ui-react";
import GradeFormBasic from "../components/GradeFormBasic";
import StringifyJson from "../components/StringifyJson";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import SematicLoader from "../components/SemanticLoader";
import List from "../components/List";
import Grade from "./Grade";
import GradeForm from "../components/GradeForm";

const GradesAndMore = () => {
  const {
    data: grades,
    error: gradesError,
    setData: setGrades,
  } = useAxiosOnMount("/api/grades");
  const { data: users, loading: usersLoading } = useAxiosOnMount("/api/users");
  const { data: skills, loading: skillsLoading } =
    useAxiosOnMount("/api/skills");

  const addGrade = async (grade) => {
    try {
      let res = await axios.post(`/api/grades`, grade);
      let user = users.find((u) => u.id === res.data.user_id);
      let skill = skills.find((s) => s.id === res.data.skill_id);
      setGrades([
        { ...res.data, user_name: user.name, skill_name: skill.name },
        ...grades,
      ]);
    } catch (err) {
      console.log("YOYOYOYOYO");
      console.log(err);
      console.log(err.response);
    }
  };

  const handleSubmit = () => {};
  return (
    <div>
      <h1>GradesAndMore</h1>
      {users && skills && (
        <GradeForm users={users} skills={skills} addGrade={addGrade} />
      )}
      <Divider />
      {usersLoading && <p>loading users</p>}
      {users && (
        <List
          data={users}
          name={"Users"}
          renderData={(user) => {
            return <p>{user.name}</p>;
          }}
        />
      )}
      {skillsLoading && <SematicLoader text="skills loading" />}
      {/* NO renderdata prop */}
      {skills && <List data={skills} name="Skills" />}
      {gradesError && <p>{gradesError}</p>}

      {grades && (
        <List
          data={grades}
          name="Grades"
          renderData={({
            score,
            id,
            user_name,
            skill_name,
            user_id,
            skill_id,
          }) => {
            return (
              <Card>
                <Card.Content header={`${user_name}`} />
                <Card.Content
                  description={`score: ${score} on ${skill_name}`}
                />
                <Card.Content extra>
                  <p>
                    user id: {user_id} skill id: {skill_id}
                  </p>
                </Card.Content>
              </Card>
            );
          }}
        />
      )}
      <Divider />
      <GradeFormBasic addGrade={addGrade} />
    </div>
  );
};

export default GradesAndMore;

// [{"id":1,"name":"Ivette Mitchell","created_at":"2021-12-08T18:21:06.007Z","updated_at":"2021-12-08T18:21:06.007Z"},{"id":2,"name":"Mariano Blanda","created_at":"2021-12-08T18:21:06.152Z","updated_at":"2021-12-08T18:21:06.152Z"},{"id":3,"name":"Delbert Grant","created_at":"2021-12-08T18:21:06.241Z","updated_at":"2021-12-08T18:21:06.241Z"},{"id":4,"name":"Odis Gleason","created_at":"2021-12-08T18:21:06.334Z","updated_at":"2021-12-08T18:21:06.334Z"},{"id":5,"name":"Jared Zieme DC","created_at":"2021-12-08T18:21:06.406Z","updated_at":"2021-12-08T18:21:06.406Z"}]
// => map
// options = [
//   { key: '1', value: '1', text: 'Ivette Mitchell' },]
// }
