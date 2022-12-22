import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState()

  // const usernameChangeHandler = (event) => setUsername(event.target.value);
  // const ageChangeHandler = (event) => setAge(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value)
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // if (username.trim().length === 0 || age.trim().length === 0) {
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input', 
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return <ErrorModal />;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age', 
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }

    const userData = {
      key: Math.random().toString(),
      username: enteredName,
      age: +enteredUserAge,
    };

    // setUsername("");
    // setAge("");

    props.onSaveUserData(userData);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const errorHandler = () => {
    setError(null)
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={username}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
