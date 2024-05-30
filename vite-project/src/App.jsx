import { Card } from "./components/Card";
import { useState } from "react";
import { Button } from "@/components/ui/button"

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

      <Button className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-red-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={increment} >Incrémenter</Button>

      <Button className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-red-900 rounded-lg group bg-gradient-to-br from-purple-600 to-red-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"  onClick={decrement}>Décrémenter</Button>
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
