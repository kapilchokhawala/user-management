import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <h2>No users found.</h2>;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>{`${user.username} (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
