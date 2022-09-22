import { useState } from "react";

function Form(props) {
  const [userName, setUserName] = useState("");
  const [validateUser, setValidateUser] = useState("false");
  const [userPassword, setUserPassword] = useState("");

  const enteredUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const enteredUserPasswordHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim() === "") {
      return setValidateUser(false);
    }
    setValidateUser(true);

    if (userPassword.trim() === "") {
      return setValidateUser(false);
    }

    setValidateUser(true);

    console.log(userName);
    console.log(userPassword);
  };
  return (
    <div className="form-container">
      <div className="form">
        <form>
          <h2 className="form-text">FoodAcademy</h2>
          <input
            type="text"
            name="firstNameEmail"
            placeholder="Enter UserName/Email"
            onChange={enteredUserNameHandler}
          />
          {!validateUser && <p className="pass">Username Cannot be blank</p>}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={enteredUserPasswordHandler}
          />
          {!validateUser && <p className="pass">password Cannot be blank</p>}

          <div className="btnn">
            <button className="btn-small" onClick={submitHandler}>
              Confirm
            </button>
            <button className="btn-small" onClick={props.onClick}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
