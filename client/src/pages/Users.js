import React from "react";
import SematicLoader from "../components/SemanticLoader";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Card } from "semantic-ui-react";

const Users = () => {
  const { data, error, loading } = useAxiosOnMount("/api/users");

  const renderUsers = () => {
    if (error) {
      return <p>error occured</p>;
    }
    if (loading) {
      return <SematicLoader />;
    }

    return (
      <List
        data={data}
        name="Users"
        renderData={(user) => {
          return (
            <Card>
              <Card.Header>{user.name}</Card.Header>
            </Card>
          );
        }}
      />
    );
  };

  return (
    <div>
      <h1>Users page</h1>
      {renderUsers()}
    </div>
  );
};

export default Users;
