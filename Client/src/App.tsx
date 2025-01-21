import "./Styles/App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
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
