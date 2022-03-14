import React from 'react'
import TaskItem from './TaskItem'
import "./styles/task.css"

export default function Task(props) {
    const tasksDetails = props.tasksData;
    return (
        <>
            <div className='task-header'>
                <h2>{props.currentList}</h2>
            </div>
            <div className='task'>
                

                {
                    tasksDetails.map((tasks) => (
                        tasks.currentList === props.currentList &&
                            tasks.tasksList.map((eachTask,index)=>{
                                return <TaskItem 
                                key={index}
                                id={eachTask.id}
                                task={eachTask.title}
                                setCurrentPage ={props.setCurrentPage}
                                setSelectedTask={props.setSelectedTask}
                                />
                            })
                    ))
                }
            </div>
        </>
    )
}