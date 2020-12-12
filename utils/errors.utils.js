module.exports.signUpErrors = (err) => {
  let errors = { username: "", email: "", password: "" };

  if (err.message.includes("username"))
    errors.pseudo = "wrong username or taken ";

  if (err.message.includes("email")) errors.email = "wrong email";

  if (err.message.includes("password"))
    errors.password = "minimum length 6 char";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("username"))
    errors.pseudo = "username taken";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "used email";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: '', password: ''}

  if (err.message.includes("email")) 
    errors.email = "Unknown email";
  
  if (err.message.includes('password'))
    errors.password = "wrong password"

  return errors;
}

module.exports.uploadErrors = (err) => {
  let errors = { format: '', maxSize: ""};

  if (err.message.includes('invalid file'))
    errors.format = "Format incompatabile";

  if (err.message.includes('max size'))
    errors.maxSize = "file over 500ko";

  return errors
}