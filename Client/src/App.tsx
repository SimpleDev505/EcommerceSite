import "./Styles/App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router";
import SignIn from "./Pages/SignIn";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </main>
  );
}

export default App;

/* <div>
  <Listgroup items={items} heading="Title"></Listgroup>
  <Alert>
    <p>alert</p>
  </Alert>
</div>; */
