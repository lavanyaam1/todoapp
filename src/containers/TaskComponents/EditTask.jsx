import React, { useState } from 'react'

export default function EditTask(props) {
  const [task ,setTask] = useState(props.selectedTask.title)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
        title: task,
        id:props.selectedTask.id
    };
    props.onSaveUpdatedTask(updatedTask);
}
const EditTaskHandler = (event) => {
  
  setTask(event.target.value);
};
  return (
    <div>
        <h1>Edit Task</h1>
        <form onSubmit={handleSubmit}>
                <div>
                    <label>Task</label>
                    <input
                        value={task}
                        onChange={EditTaskHandler}
                        type="text" />
                </div>
                <br />
                <button type='submit'>Save</button>
        </form>
    </div>
  )
}
