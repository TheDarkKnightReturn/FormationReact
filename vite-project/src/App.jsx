import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState[0];

  const increment = () =>  {
    setCounter(counter + 1);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="m-7 text-3xl font-bold underline">Hello world!</h1>
        <Card title="Title Props 2" subTitle="subtitle Props 2"></Card>
        <Card title="Title Props without subtitle"></Card>
        <Button title="Cliquer" onCardClick={increment}>
           counter : {counter}
        </Button>
      </div>
    </div>
  );
}

export default App;
