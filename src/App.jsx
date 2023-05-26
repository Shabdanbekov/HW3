// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { updateUser } from "./store/todoReducer";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch(updateUser(id, value));
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={handleInputChange}
          placeholder="name"
        />
      </div>
      <div>
        <input
          type="number"
          id="age"
          value={user.age}
          onChange={handleInputChange}
          placeholder="age"
        />
      </div>
      <div>
        <select id="gender" value={user.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <h2>Entered Data:</h2>
        <p>
          NAME: <span>{user.name}</span>
        </p>
        <p>
          AGE: <span>{user.age}</span>
        </p>
        <p>
          GENDER: <span>{user.gender}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
