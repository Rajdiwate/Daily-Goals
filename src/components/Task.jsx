import React from 'react'

const Task = ({title , description ,  deleteTask }) => {

  const handleonClick = ()=> {
      deleteTask(title)
  }
  return (
    <>
      <div className='task'>
        
        <div>
            <p>{title}</p>
            <span>{description}</span>
            
        </div>
        <button onClick={handleonClick}>-</button>
    </div></>
  
  )
}

export default Task