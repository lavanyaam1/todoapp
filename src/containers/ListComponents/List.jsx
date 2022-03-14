import React from 'react'
import ListItem from './ListItem'
import "./styles/list.css"

export default function List(props) {
  const lists = props.list
  return (
    <>
    <div className='list-header'>
      <h2>List Types</h2>
    </div>
      <div className='list'>

        {
          lists.map((list, index) => (
            <ListItem
              key={index}
              title={list.title}
              setCurrentPage ={props.setCurrentPage}
              setCurrentList = {props.setCurrentList} />
          ))
        }
      </div>
    </>
  )
}
