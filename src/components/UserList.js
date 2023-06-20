import classes from "../css/UserList.module.css";
import Card from "./UI/Card";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user, index) => (
        <li key={index}>
          {user.username}
          {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
