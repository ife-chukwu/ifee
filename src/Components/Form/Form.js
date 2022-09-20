import { useState, useRef } from "react";
import Backdrop from "./Backdrop";
function Form(props) {
  const nameInputRef = useRef();
  const [enteredUserName, setEnteredUserName] = useState("");
  const [validateUser, setValidateUser] = useState("true");
  const [enteredUserPassword, setEnteredUserPassword] = useState('')

  const enteredUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const enteredPassword = (event) =>{
    setEnteredUserPassword(event.target.value)
  }
  const eventHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim() === "") {
      setValidateUser(false);
      return;
    }
    setValidateUser(true);

    console.log(enteredUserName);
    const setEnterValue = nameInputRef.current.value;
    console.log(setEnterValue);
    setEnteredUserName("");
  };
  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={eventHandler}>
          <h2 className="form-text">FoodAcademy</h2>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            placeholder="Enter UserName"
            onChange={enteredUserNameHandler}
            value={enteredUserName}
          />
          <input
            ref={nameInputRef}
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={enteredUserPassword}
            value={enteredUserName}
          />
          {!validateUser && <p className="pass">Username Cannot be blank</p>}
          <div className="btnn">
          <button className="btn-small">Submit</button>
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
