import { useEffect, useState } from "react"
import { TodoContextProvider } from "./context"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [values, setValues] = useState([])

  const addTask = (task) => {
    setValues((prev) => [{ id: Date.now(), ...task }, ...prev])
  }

  const updateTask = (id, task) => {
    setValues((prev) => prev.map((prevTask) => (prevTask.id == id ? task : prevTask)))
  }

  const deleteTask = (id) => {
    setValues((prev) => prev.filter((prevTask) => prevTask.id != id))
  }

  const toggleComplete = (id) => {
    setValues((prev) =>
      prev.map((prevTask) =>
        (prevTask.id == id ? { ...prevTask, completed: !prevTask.completed } : prevTask))
    )
  }

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem('values'))

    if (values && values.length > 0) {
      setValues(values)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values))
  }, [values])

  return (
    <TodoContextProvider value={{ values, addTask, updateTask, deleteTask, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {values.map((task) => (
              <div key={task.id} className="w-full">
                <TodoItem todo={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
