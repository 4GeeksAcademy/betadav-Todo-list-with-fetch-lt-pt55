import React, { useState } from "react";

const Todolist = () => {

    const [inputValue, setInputValue] = useState('')
    const [task, setTask] = useState([]);

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addTaskToList() {
        fetch('https://playground.4geeks.com/todo/todos/David', {
            method: "POST",
            body: JSON.stringify({ label: inputValue }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (inputValue) {
                    console.log('Success:', data);
                    setTask(prevTasks => [...prevTasks, inputValue]);
                    setInputValue('');
                }
            })
    }

    function deleteTask(index) {
        const newList = task.filter((_, i) => i !== index);
        setTask(newList);
    }

    return (
        <div className="d-flex justify-content-center" style={{}}>
            <div className="paper row d-flex justify-content-center mt-5">
                <div className="title d-flex justify-content-center">
                    <h1>todos</h1>
                </div>
                <div className="tasks d-flex justify-content-center col-12 p-0">
                    <input
                        className="form-control"
                        type="text"
                        value={inputValue}
                        placeholder="What needs to be done?"
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addTaskToList();
                            }
                        }} />
                </div>
                <ul
                    className="list-group col-12 p-0">
                    {task.map((task, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between">
                            <span>{task}</span>
                            <button
                                onClick={() => deleteTask(index)}
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </li>
                    ))}
                </ul>
                {task.length > 0 ? (
                    <div>
                        {task.length} item{task.length === 1 ? '' : 's'} left
                    </div>
                ) : (
                    <div>
                        No hay tareas, añadir tareas
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todolist
