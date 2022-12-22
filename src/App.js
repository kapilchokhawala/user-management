import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState("");

  const addUserHandler = (user) =>
    setUsers((prevUsers) => [user, ...prevUsers]);

  return (
    <div>
      <AddUser onSaveUserData={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
