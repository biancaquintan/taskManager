import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'
import { v4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    setTasks(tasks => tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <TaskForm onAddTaskSubmit={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={deleteTask}
        />
      </div>
    </div>
  )
}

export default App
