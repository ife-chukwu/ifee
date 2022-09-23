import { useState } from "react";
import FormValidate from "./FormValidate";

function Form(props) {
  const [value, setValue] = useState({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) =>
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(FormValidate);
    console.log(value);
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
            value={value.email}
            onChange={handleChange}
          />
          {errors.email && <p className="pass">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          {errors.password && <p className="pass">{errors.password}</p>}
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
