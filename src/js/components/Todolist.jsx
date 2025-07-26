import React, { useState, useEffect } from "react";

const Todolist = () => {

    const [inputValue, setInputValue] = useState('')
    const [tasks, setTask] = useState([]);

    function getToDos() {
        fetch('https://playground.4geeks.com/todo/users/David')
            .then((response) => response.json())
            .then((data) => setTask(data.todos))
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        getToDos()
    }, [])

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
            .then(() => {
                if (inputValue) {
                    setInputValue('');
                    getToDos();
                }
            })
    }

    function deleteTask(id) {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE"
        })
        .then(() => {
        getToDos();
    })

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
                    {tasks.map((todo) => (
                        <li
                            key={todo.id}
                            className="list-group-item d-flex justify-content-between">
                            <span>{todo.label}</span>
                            <button
                                onClick={() => deleteTask(todo.id)}
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </li>
                    ))}
                </ul>
                {tasks.length > 0 ? (
                    <div>
                        {tasks.length} item{tasks.length === 1 ? '' : 's'} left
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
