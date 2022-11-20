import { Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, RootState } from ".";
import "./App.css";

let Box: JSX.Element = <div></div>;

function App() {
  const [user, setUser] = useState<string | number>("park");

  const selector = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <h2>Hello Type</h2>
      <Profile name="abc"></Profile>
      <div>{selector.counterSlice.count}</div>
      <button onClick={() => dispatch(increment())}>btn</button>
    </div>
  );
}

function Profile({ name }: { name: string }): JSX.Element {
  return <div>Profile Here ! {name}</div>;
}

export default App;
