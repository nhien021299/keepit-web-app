import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Base Color", "Legend Color", "Case Color"];

  const onSelected = (item: string) => {
    console.log(item);
  };

  return <ListGroup title="Config" items={items} onSelected={onSelected} />;
}

export default App;
