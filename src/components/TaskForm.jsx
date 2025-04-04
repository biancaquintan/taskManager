import { useState } from "react";

function TaskForm({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col"> 
      <input 
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
      />
      <input 
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        value={description}
        onChange={(event)=> setDescription(event.target.value)}
      />
      <button 
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={()=> {
          if (!title.trim()) {
            return alert("Informe um título para prosseguir")
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default TaskForm