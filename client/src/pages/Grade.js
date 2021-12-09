import { Card } from "semantic-ui-react";

const Grade = ({ score, id, user_name, skill_name, user_id, skill_id }) => {
  return (
    <Card>
      <Card.Content header={`${user_name}`} />
      <Card.Content description={`score: ${score} on ${skill_name}`} />
      <Card.Content extra>
        <p>
          user id: {user_id} skill id: {skill_id}
        </p>
      </Card.Content>
    </Card>
  );
};

export default Grade;
