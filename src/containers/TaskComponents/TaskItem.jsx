import React from 'react'

export default function TaskItem(props) {
  const addTaskHandler = () => {
    props.setCurrentPage('editTask');
    const newData = {
      id:props.id,
      title:props.task
    }
    props.setSelectedTask(newData)
  }
  return (
    <>
      <article className='taskItem'>
        <h1>{props.task}</h1>
        <button onClick={addTaskHandler}>Edit Task</button>
      </article>
    </>
  )
}