import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Form, Select } from "semantic-ui-react";
import GradeFormBasic from "../components/GradeFormBasic";
import StringifyJson from "../components/StringifyJson";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import SematicLoader from "../components/SemanticLoader";

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
      setGrades([res.data, ...grades]);
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
      <h3>Users</h3>
      {usersLoading && <p>loading users</p>}
      {users && <StringifyJson json={users} />}
      <h3>Skills</h3>
      {skillsLoading && <SematicLoader text="skills loading" />}
      <StringifyJson json={skills} />
      <h3>Grades</h3>
      {gradesError && <p>{gradesError}</p>}
      <StringifyJson json={grades} />

      {grades && grades.map((g) => <p>{g.id}</p>)}
      <Divider />
      <GradeFormBasic addGrade={addGrade} />
    </div>
  );
};

export default GradesAndMore;

// [{"id":1,"name":"Ivette Mitchell","created_at":"2021-12-08T18:21:06.007Z","updated_at":"2021-12-08T18:21:06.007Z"},{"id":2,"name":"Mariano Blanda","created_at":"2021-12-08T18:21:06.152Z","updated_at":"2021-12-08T18:21:06.152Z"},{"id":3,"name":"Delbert Grant","created_at":"2021-12-08T18:21:06.241Z","updated_at":"2021-12-08T18:21:06.241Z"},{"id":4,"name":"Odis Gleason","created_at":"2021-12-08T18:21:06.334Z","updated_at":"2021-12-08T18:21:06.334Z"},{"id":5,"name":"Jared Zieme DC","created_at":"2021-12-08T18:21:06.406Z","updated_at":"2021-12-08T18:21:06.406Z"}]
// => map
// options =[
//   { key: '1', value: '1', text: 'Ivette Mitchell' },]
// }
