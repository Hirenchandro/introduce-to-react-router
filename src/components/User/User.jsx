import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, phone, email } = user;
  const userStyle = {
    border: "4px solid goldenRod",
    padding: "5px",
    borderRadius: "20px",
  };

  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>Phone No: {phone}</p>
      <p>Email: {email}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
