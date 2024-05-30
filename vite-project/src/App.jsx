import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="m-7 text-3xl font-bold underline">Hello world!</h1>
        <Card title="Title Props 2" subTitle="subtitle Props 2"></Card>
        <Card></Card>
        <Button title="Incrémenter" onCardClick={increment} />

        <Button title="décrémenter" onCardClick={decrement} />

        <div className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          <p>counter : {counter}</p>
          <p>{counter >= 0 ? "Positif" : "Négatif"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
