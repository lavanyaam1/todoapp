import React,{useState}from 'react'

export default function NewTask(props) {
  const [enteredTask, setEnteredTask] = useState([{}])

  const handleSubmit = (e) => {
      e.preventDefault();
      const newTaskData = {
          task: enteredTask,
      };
      props.onSaveTaskData(newTaskData);
      setEnteredTask("");
  }
  
  const taskChangeHandler = (event) => {
      setEnteredTask(event.target.value);
  };
  return (
    <div>
        <h1>Tasks</h1>
        <form onSubmit={handleSubmit}>
                <div>
                    <label>Task</label>
                    <input
                        value={enteredTask}
                        onChange={taskChangeHandler}
                        type="text" />
                </div>
                <br />
                <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
