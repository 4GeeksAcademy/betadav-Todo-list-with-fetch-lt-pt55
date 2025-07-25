import React, { useEffect, useState } from "react";

const Getdata = () => {
    const [userTodos, setUserTodos] = useState([])

    function getUser() {
        fetch('https://playground.4geeks.com/todo/users/David')
            .then((response) => response.json())
            .then((data) => setUserTodos(data.todos))
            .catch(error => {
                console.log(error);
            });
    }

    function updateTask() {
        fetch('https://playground.4geeks.com/todo/todos/David', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (inputValue) {
                    setTask(prevTasks => [...prevTasks, inputValue]);
                    setInputValue('');
                }
            })
    }

    useEffect(() => {
        console.log('se cargo la pagina')
        getUser()
    }, [])

    return (
        <>
            <p>Data</p>
            {userTodos.map((user) => <p key={user.id}> {user.label} </p>)}
        </>

    )
}

export default Getdata