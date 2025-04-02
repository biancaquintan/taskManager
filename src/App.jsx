import { useState } from "react";
import FormTask from "./components/FormTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar conteúdo do curso",
      isCompleted: false
    },
    {
      id: 2,
      title: "Fazer compra",
      description: "Arroz, feijão, farinha",
      isCompleted: false
    },
    {
      id: 3,
      title: "Capinar quintal",
      description: "Limpar a área de churrasco",
      isCompleted: false
    },
    {
      id: 4,
      title: "Enviar email para empresa",
      description: "",
      isCompleted: false
    },
    {
      id: 5,
      title: "Ler livro da série",
      description: "Livro- O retorno",
      isCompleted: true
    },

  ])

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    setTasks((tasks) => tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center pb-8">
          Gerenciador de Tarefas
        </h1>
        <FormTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={deleteTask}/>
      </div>
    </div>
  );
}

export default App