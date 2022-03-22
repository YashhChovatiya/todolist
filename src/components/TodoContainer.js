import React from 'react';
import "./TodoContainer.css";

const TodoContainer = ({index,image,title,subtitle,handleUpdate,handleDelete}) => {
  return (
    <div className='container'>
        <div className="image-div">
        <img src={image} className="image" ></img>
        </div>
        <h2 className='title'>{title}</h2>
        <h4 className='subtitle'>{subtitle}</h4>
        <button className='button' onClick={()=>handleUpdate(index)}>Edit</button>
        <button className='button' onClick={()=>handleDelete(index)}>Delete</button>
    </div>
  )
}

export default TodoContainer