import React, { useEffect } from "react";

const Getdata = () => {

    function createUser(){
        console.log('createUser')
        fetch('https://playground.4geeks.com/todo/users')
        .then((response)=> response.json)
        .then((data)=> console.log(data))
    }

    useEffect(()=>{
        console.log('se cargo la pagina')
        createUser()
    },[])

    return (
        <h1>Datos aqui</h1>
    )
}

export default Getdata