import { useState } from "react";

function Form(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [ValidateEmail, setValidateEmail] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailValidationHandler = () => {
    setValidateEmail(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return;
    }
    const inputValues = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(inputValues);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="form-container">
      <div className="form">
        <form>
          <h2 className="form-text">FoodAcademy</h2>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={enteredEmail}
            onChange={enteredEmailHandler}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={enteredPasswordHandler}
            value={enteredPassword}
          />
        </form>
        <div className="btnn">
          <button className="btn-small" onClick={submitHandler}>
            Submit
          </button>
          <button className="btn-small" onClick={props.onClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
