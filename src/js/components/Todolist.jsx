import React, {useState} from "react";



const Todolist = () => {
    const [inputValue , setInputValue] = useState('No hay tareas, añadir tareas')
    const [task, setTasks] = useState([]);

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addTaskToList() {
        if (inputValue.trim()) { 
            setTasks(prevTasks => [...prevTasks, inputValue]);
            setInputValue('');
    }
}

    return (
        <div className="text-center">
            <h1>Todo</h1>
            <div>
                <label htmlFor="task">Task: </label>
                <input 
                type="text" 
                value={inputValue} 
                id="task" 
                onChange={handleInputChange} 
                onKeyPress={(e) => {if (e.key === 'Enter') {
                            addTaskToList();
                        }}}/>
                <button onClick={addTaskToList}>Save</button>
            </div>
            {task.map((tarea,index) => <ul key={index}>Task {index + 1 }: {tarea}</ul>)}  
        </div>
    )
}

export default Todolist
