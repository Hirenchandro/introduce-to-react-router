import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  const userDetailsStyle = {
    border: "2px solid black",
    padding: "4px",
    borderRadius: "10px",
    backgroundColor: "lightblue",
  };
  return (
    <div>
      <h1>User Details Here</h1>
      <div style={userDetailsStyle}>
        <h2>User Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Phone No: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
};

export default UserDetails;
