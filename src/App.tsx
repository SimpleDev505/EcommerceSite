import Listgroup from "./Components/ListGroup";
function App() {
  const items = ["first", "second", "third", "first", "second", "third"];

  return (
    <div>
      <Listgroup items={items} heading="Title"></Listgroup>
    </div>
  );
}

export default App;
