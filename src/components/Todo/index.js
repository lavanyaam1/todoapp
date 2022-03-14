import React, { useState } from 'react'

import NewList from '../../containers/ListComponents/NewList';
import List from '../../containers/ListComponents/List'
import NewTask from '../../containers/TaskComponents/NewTask';
import Task from '../../containers/TaskComponents/Task';
import EditTask from '../../containers/TaskComponents/EditTask'

const lists = [
  {
    title: "Meeting",
  },
  {
    title: "Play",
  },
  {
    title: "Movie",
  }
];

const tasksData = [
  {
    currentList: "Meeting",
    tasksList: [{
      title: "React"
    }
    ]
  },
  {
    currentList: "Play",
    tasksList: [{
      title: "Badminton"
    },
    {
      title: "Volley Ball"
    },
    {
      title: "Basket Bal"
    }
    ]
  },
  {
    currentList: "Movie",
    tasksList: [{
      title: "LoveMoctail2"
    },
    {
      title: "James"
    },
    {
      title: "Jolly Days"
    }
    ]
  }
]

const indexedTaskData = (tasksData) => {
  const indexedTask = tasksData.map(eachTask => {
    return {
      currentList: eachTask.currentList,
      tasksList: eachTask.tasksList.map((eachTitle, index) => {
        return {
          id: index + 1,
          title: eachTitle.title
        }
      })
    }
  })
  return indexedTask;
}

export default function Todo() {
  const [listItem, setListItem] = useState(lists);
  const [currentPage, setCurrentPage] = useState('list')
  const [currentList, setCurrentList] = useState();
  const [TaskItem, setTaskItem] = useState(indexedTaskData(tasksData));
  const [selectedTask, setSelectedTask] = useState();


  const saveListData = (newItem) => {
    setListItem((prevState) => [newItem, ...prevState])
  };

  const saveTaskData = (newItem) => {
    setTaskItem((prevState) => [newItem, ...prevState])
  };

  const saveUpdatedTask = (updatedTask) => {
    const newTask = TaskItem.map(eachTask => {
      return {
        currentList: eachTask.currentList,
        tasksList: eachTask.tasksList.map((eachTitle, index) => {
          if (eachTitle.id === updatedTask.id) {
            return updatedTask
          } else {
            return eachTitle
          }
        })
      }
    })
    setCurrentPage('newTask');
    setTaskItem(newTask)
  };
  return (
    <>
      {currentPage === 'list' &&
        <>
          < List list={listItem} setCurrentPage={setCurrentPage} setCurrentList={setCurrentList} />
          <NewList onSaveListData={saveListData} />
        </>
      }
      {currentPage === 'newTask' &&
        <>
          <Task tasksData={TaskItem} currentList={currentList} setCurrentPage={setCurrentPage} setSelectedTask={setSelectedTask} />
          <NewTask onSaveTaskData={saveTaskData} />
        </>
      }
      {currentPage === 'editTask' &&
        <>
          <EditTask selectedTask={selectedTask} onSaveUpdatedTask={saveUpdatedTask} />
        </>
      }

    </>
  )
}
