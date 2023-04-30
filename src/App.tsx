import { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal/modal";
import { Input } from "./components/input/input";
import { LoginButton } from "./components/loginButton/button";
import { SignupButton, ButtonKindEnum } from "./components/signupButton/button";

type Credentials = { username: string; password: string };

function App() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  function onCredChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function onLoginClick() {
    alert("Logged in!");
  }

  function onFacebookSignupClick() {
    alert("Signing up with Facebook!");
  }

  function onTwitterSignupClick() {
    alert("Signing up with Twitter!");
  }

  function onGoogleSignupClick() {
    alert("Signing up with Google!");
  }

  return (
    <div className="App">
      <Modal title="Login">
        <Input
          onChange={onCredChange}
          value={credentials.username}
          label="Username"
          name="username"
          type="username"
          placeholder="Type your username"
        />
        <Input
          onChange={onCredChange}
          value={credentials.password}
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
        />
        <p>Forgot password?</p>
        <LoginButton name="LOGIN" onClick={onLoginClick} />
        <div className="signupContainer">
          <p>Or Sign Up Using</p>
          <div className="buttonContainer">
            <SignupButton
              kind={ButtonKindEnum.facebook}
              onClick={onFacebookSignupClick}
            />
            <SignupButton
              kind={ButtonKindEnum.twitter}
              onClick={onTwitterSignupClick}
            />
            <SignupButton
              kind={ButtonKindEnum.google}
              onClick={onGoogleSignupClick}
            />
          </div>
          <div className="footer">
            <p>Or Sign Up Using</p>
            <p className="signupLink">SIGN UP</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
