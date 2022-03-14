import React from 'react'

export default function ListItem (props) {
  const addTaskHandler=()=>{
    props.setCurrentPage('newTask');
    props.setCurrentList(props.title)
  }
  return (
    <>
    <article className='listItem'>
        <h1>{props.title}</h1>
        <button onClick={addTaskHandler}>Add Task</button>
    </article>
    </>
  )
}
