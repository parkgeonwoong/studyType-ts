import { useState } from "react";
import "./App.css";

let Box: JSX.Element = <div></div>;

function App() {
  const [user, setUser] = useState<string | number>("park");

  return (
    <div>
      <h2>Hello Type</h2>
      <Profile name="abc"></Profile>
    </div>
  );
}

function Profile({ name }: { name: string }): JSX.Element {
  return <div>Profile Here ! {name}</div>;
}

export default App;
