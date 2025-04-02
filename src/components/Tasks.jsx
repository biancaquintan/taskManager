import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow text-white">
      {tasks.map((task)=> (
        <li key={task.id} className="flex gap-2">
          <button 
            onClick={()=> onTaskClick(task.id)} 
            className={`bg-slate-400 w-full text-left p-2 rounded-md ${task.isCompleted && "line-through font-extralight"}`}>
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md">
            <ChevronRightIcon/>
          </button>
          <button 
            onClick={()=> onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md">
            <Trash2Icon/>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks
