import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

function SignUp(props) {
  const [inputState, setInputState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
  });

  const inputGeneralHandler = (event) =>
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(inputState);
  };

  return (
    <div className="sign-up-1">
      <form className="sign-up-form" onSubmit={submitFormHandler}>
        <MdOutlineCancel className="icon" title="Exit" />
        <h2 className="form-text">FoodAcademy</h2>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={inputState.firstname}
          onChange={inputGeneralHandler}
        />

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={inputState.lastname}
          onChange={inputGeneralHandler}
        />

        <input
          type="date"
          name="age"
          placeholder="Birthday"
          value={inputState.age}
          onChange={inputGeneralHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Password"
          value={inputState.email}
          onChange={inputGeneralHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputState.password}
          onChange={inputGeneralHandler}
        />
        <div className="btnn">
          <button className="btn-small">Confirm</button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
