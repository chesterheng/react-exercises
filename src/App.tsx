import "./App.css";
import { users } from "./data/users";

function App() {
  const userItems = users.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </>
  );
}

export default App;
