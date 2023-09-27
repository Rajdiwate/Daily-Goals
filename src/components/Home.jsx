import React from 'react'
import Task from './Task'
import { useState } from 'react'

function Home() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    

    const handleClick = (e) => {
        e.preventDefault();
        
        if(title){
            setTasks([...tasks , {title ,desc}])
            setTitle("")
            setDesc("")
        }
        
        

    }
    const deleteTask = (T)=>{
       setTasks(tasks.filter(tasks=> tasks.title !==T))
    }
    return (

        <div className='container'>
            <h1>Daily Goals</h1>
            <form onSubmit={handleClick}>

                <input type='text' placeholder='Title' value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <textarea placeholder='Description' value={desc} onChange={(e) => {
                    setDesc(e.target.value);
                }}></textarea>
                <button type='submit' >ADD</button>
            </form>
            <h2>Your Tasks</h2> 

            {tasks.map((item ,index) => {
                return (<Task key = {index} title = {item.title}  description={item.desc} deleteTask = {deleteTask} />)
            })}
        </div>

    )
}

export default Home