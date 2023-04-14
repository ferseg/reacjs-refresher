import { useState } from "react";
import Container from "../Container";
import Modal from "../Modal";
import TextInput from "../TextInput";

const UserForm = ({ onAdd }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const errorModalHandler = () => {
    setShowErrorModal(false);
  };

  const usernameChangeHandler = (username) => {
    setUsername(username);
  };

  const ageChangeHandler = (age) => {
    setAge(age);
  };

  const addUserInformationHandler = () => {
    if (username.length < 2) {
      setErrorTitle("Invalid username");
      setErrorMessage("The username should be at least 2 characters long");
      setShowErrorModal(true);
      return;
    }
    if (isNaN(age) || +age < 1) {
      setErrorTitle("Invalid age");
      setErrorMessage("The age should be greater than 0");
      setShowErrorModal(true);
      return;
    }
    onAdd(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <>
      <Container>
        <TextInput title="User name" value={username} onChange={usernameChangeHandler}/>
        <TextInput title="Age (years)" value={age} onChange={ageChangeHandler}/>
        <button onClick={addUserInformationHandler}>Add</button>
      </Container>
      {showErrorModal && (
        <Modal title={errorTitle} onCancel={errorModalHandler}>
          <h3>{errorMessage}</h3>
        </Modal>
      )}
    </>
  );
};

export default UserForm;
