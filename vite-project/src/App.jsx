import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setFormName] = useState('');
  const [firstName, setFormFirstName] = useState('');
  const [empNumber, setFormEmpNumber] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici les actions nécessaires à la soumission du formulaire, par exemple, envoyer les données à un serveur
    console.log("Formulaire soumis avec les données :", e);

    setItems([...items, {name : name, firstName: firstName, empNumber : empNumber}]);
    setFormName("");
    setFormFirstName("");
    setFormEmpNumber("");
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="m-10">
      <div className="grid grid-cols-2 ">
        <form className="mx-auto  max-w-96 p-8" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setFormName(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={e => setFormFirstName(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Matricule
            </label>
            <input
              type="text"
              id="empNumber"
              value={empNumber}
              onChange={e => setFormEmpNumber(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="m-10 relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-red-900 rounded-lg group bg-gradient-to-br from-green-600 to-green-500 group-hover:from-purple-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
          >
            Valider
          </button>
        </form>

        <div className="flex flex-col ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        FirstName
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Matricule
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Affiche chaque élément de la liste dans une ligne de tableau */}
                    {items && items.length > 0 ? (
                      items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.firstName}</td>
                          <td>{item.empNumber}</td>
                        </tr>
                      ))
                    ) : (
                      <tr key="NoResult">
                        <td>Pas de résultat</td>
                        <td></td>
                        <td></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
