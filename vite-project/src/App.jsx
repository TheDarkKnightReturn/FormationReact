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
    <div>
      <h2 className="m-7 text-3xl font-bold underline">Hello world!</h2>

      <Button title="Incrémenter" onCardClick={increment} />

      <Button title="Décrémenter" onCardClick={decrement} />
      <span
        className={`${
          counter >= 0 ? "bg-blue-100" : "bg-red-100"
        }  text-sm font-medium me-2 px-2.5 py-0.5 rounded `}
      >
        {`counter: ${counter} ${counter >= 0 ? "Positif" : "Négatif"}`}
      </span>
      <Card title="Title Props 2" subTitle="subtitle Props 2"></Card>
      <Card></Card>
    </div>
  );
}

export default App;
