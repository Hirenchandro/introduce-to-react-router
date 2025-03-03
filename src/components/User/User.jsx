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
    </div>
  );
};

export default User;
