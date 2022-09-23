const FormValidate = (value) => {
  let errors = {};
  if (!value.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "email is invalid";
  }
  if (!value.password) {
    errors.password = "password is required";
  } else if (value.password.length < 4) {
    errors.password = "password must exceed four character";
  }
  return errors;
};

export default FormValidate;
