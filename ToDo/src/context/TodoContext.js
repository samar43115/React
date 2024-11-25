import {createContext,useContext} from 'react'

export const TodoContext = createContext({
    values:[
        {
            id:1,
            task:'msg',
            completed: 'false'
        }
    ],
    
    addTask: (task)=>{},
    updateTask: (id,task)=>{},
    deleteTask: (id)=>{},
    toggleComplete: (id)=>{}

});

export const useTodoContext=()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;