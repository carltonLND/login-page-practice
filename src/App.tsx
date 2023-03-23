import { useState } from "react";
import "./App.css";
import { Model } from "./components/model/model";
import { Input } from "./components/input/input";
import { Button } from "./components/button/button";

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

  return (
    <div className="App">
      <Model title="Login">
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
        <Button name="LOGIN" onClick={onLoginClick} />
      </Model>
    </div>
  );
}

export default App;
