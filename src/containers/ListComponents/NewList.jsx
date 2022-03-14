import React, { useState } from 'react';


export default function NewList(props) {
    const [enteredTitle, setEnteredTitle] = useState([{}])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newListData = {
            title: enteredTitle,
        };
        console.log(newListData);
        props.onSaveListData(newListData);
        setEnteredTitle("");
    }
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add your new list here</h3>
                <div>
                    <label>List Name</label>
                    <input
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        type="text" />
                </div>
                <br />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}