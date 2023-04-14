import Container from "../Container";
import UserDetail from "./UserDetail";
import styles from './UserList.module.css';

const UserList = ({users}) => {
  const userItems = users.map(user => <UserDetail key={user.username} user={user} />);
  return (
    <Container className={styles['user-list']}>
      <h2>User list</h2>
      <ul>
        {userItems}
      </ul>
    </Container>
  );
};

export default UserList;
