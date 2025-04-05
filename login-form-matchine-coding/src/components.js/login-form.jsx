import { useRef } from "react";

const LoginForm = () => {
  console.log("Re-rendering");

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = () => {
    console.log(usernameRef.current, passwordRef.current);
  };

  const handleUserNameChange = (e) => {
    usernameRef.current = e.target.value;
  };
  const handlePasswordChange = (e) => {
    passwordRef.current = e.target.value;
  };
  return (
    <>
      <input
        type="text"
        placeholder="username"
        onChange={handleUserNameChange}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};

export default LoginForm;
