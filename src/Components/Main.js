import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "./Form/Form";
import Backdrop from './Form/Backdrop'
function Main(props) {
  const [FormIsOpen, setFormIsOpen] = useState(false);

  function myFun() {
    setFormIsOpen(true);
  }
  function closeFormHandler() {
    setFormIsOpen(false);
  }
  function closeBackdropandler(){
    setFormIsOpen(false)
  }

  return (
    <div>
      <ul className="main">
        <h1 className="logo">
          Food <span className="span-1">Academy</span>
        </h1>
        <li className="main-2">
          <Link to="/" className="link">
            Index
          </Link>
        </li>
        <li className="main-2">
          <Link to="submain" className="link">
            Explore
          </Link>
        </li>
        <li className="main-2">
          <Link to="about" className="link">
            About
          </Link>
        </li>
        <li className="main-2">
          <Link to="order" className="link">
            Order
          </Link>
        </li>
        <ul className="sign-up">
          <li>
            <button onClick={myFun}>Login</button>
          </li>
          <li>
            <Link to="signup" className="link-2">
              Sign Up
            </Link>
          </li>
        </ul>
      </ul>
      {FormIsOpen && <Form onClick={closeFormHandler} />}
      {FormIsOpen && <Backdrop  onCancel={closeBackdropandler} />}
    </div>
  );
}
export default Main;
