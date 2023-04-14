const UserDetail = ({ user }) => {
  return (
    <li>
      <label>{user.username}</label>
      <label> ({user.age})</label>
    </li>
  );
}

export default UserDetail;
