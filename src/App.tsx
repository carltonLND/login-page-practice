import { useState } from "react";
import "./App.css";
import { Model } from "./components/model/model";
import { Input } from "./components/input/input";

type Credentials = { username: string; password: string };

function App() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  function onCredUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="App">
      <Model title="Login you bitch">
        <Input
          onChange={onCredUpdate}
          value={credentials.username}
          label="Username"
          name="username"
          type="username"
        />
        <Input
          onChange={onCredUpdate}
          value={credentials.password}
          label="Password"
          name="password"
          type="password"
        />
      </Model>
    </div>
  );
}

export default App;
