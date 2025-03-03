import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Our users here!!</h1>
      <p>Our Fantastic user</p>
      <h2>User length : {users.length}</h2>
      <div className="users">
        {users.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
