import React, { useState } from "react";



const Todolist = () => {
    const [inputValue, setInputValue] = useState('')
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

    function deleteTask(index){
        const newList = task.filter((_, i) => i !== index);
        setTasks(newList);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="title">
                    <h1>Todos</h1>
                </div>
                <div className="tasks col-12 p-0">
                    <input
                        className="form-control"
                        type="text"
                        value={inputValue}
                        placeholder="What needs to be done?"
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                addTaskToList();
                            }
                        }} />
                </div>
                <ul className="list-group col-12 p-0">
					{task.map((task, index) => (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<span>{task}</span>
							<button
								onClick={() => deleteTask(index)}
								style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
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
