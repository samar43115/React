import { useState } from "react";
import { useTodoContext } from "../context";

function TodoForm() {
    const [task,setTask]=useState("")
    const {addTask} = useTodoContext()

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!task) return
        addTask({task,completed:false})
        setTask("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={task}
                onChange={(e)=>(setTask(e.target.value))}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

