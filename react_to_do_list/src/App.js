import React, { useState } from 'react'; 
import './App.css'; 

function App() {
  // État pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);

  // État pour stocker la valeur de l'input (champ de texte)
  const [inputValue, setInputValue] = useState('');

  // Fonction pour mettre à jour la valeur de l'input
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Met à jour inputValue avec la valeur saisie
  };

  // Fonction pour ajouter une tâche à la liste
  const handleAddTask = () => {
    if (inputValue.trim() !== '') { // Vérifie que l'input n'est pas vide
      setTasks([...tasks, inputValue]); // Ajoute la nouvelle tâche à la liste
      setInputValue(''); // Réinitialise l'input
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filtre la liste pour exclure la tâche à supprimer
    setTasks(newTasks); // Met à jour la liste des tâches
  };

  return (
    <div className="App">
      <h1>Ma To Do List</h1>

      {/* Champ de texte pour ajouter une tâche */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Appelle handleInputChange à chaque changement
          placeholder="Ajouter une tâche"
        />
        {/* Bouton pour ajouter la tâche */}
        <button onClick={handleAddTask}>Ajouter</button>
      </div>

      {/* Liste des tâches */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Affiche la tâche */}
            {task}
            {/* Bouton pour supprimer la tâche */}
            <button onClick={() => handleRemoveTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; // Exporte le composant App pour qu'il puisse être utilisé ailleurs