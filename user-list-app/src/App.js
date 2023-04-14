import { useState } from 'react';
import './App.css';
import UserForm from './components/user-info/UserForm';
import UserList from './components/user-info/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers(users => [{username, age}, ...users])
  }
  return (
    <div className="App">
      <UserForm onAdd={addUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
