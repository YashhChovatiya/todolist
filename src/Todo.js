import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Cardcomp from './components/Cardcomp';
import TodoContainer from './components/TodoContainer';

import "./todo.css";



const Todo = () => {
    const[title,setTitle]=useState("");
    const[subtitle,setSubtitle]=useState("");
    const[image,setImage]=useState("");
    const[data,setData]=useState([]);
    const[edit,setEdit]=useState(false);
    const [id,setId]=useState(null);
    
    const handleUpdate=(index)=>{
        console.log("handleupdate")
        setEdit(true);
        setId(index);
        const newData=[...data];
        setTitle(newData[index].Title);
        setSubtitle(newData[index].Subtitle);
        setImage(newData[index].Image);
        setData(newData);
    }
    const handleDelete=(index)=>{
        console.log("handle delete");
       const NewData=data.filter(item=>item.Id!==index);
       setData(NewData);
    }
   
        const adddata=()=>{
            
            console.log("add data");
            if(edit==true){
                const updateData=[...data];
                updateData[id].Title=title;
                updateData[id].Subtitle=subtitle;
                updateData[id].Image=image;
                setData(updateData);
                setEdit(false);
                setId(null);

            }
            else{
                const updatedata=[
                    ...data,
                    {
                        Title:title,
                        Subtitle:subtitle,
                        Image:image,
                        Id:data.length
                    }
                ];
                setData(updatedata);
            }
           
            
            setTitle("");
            setImage("");
            setSubtitle("");
        }
  
  return (
      <>
         <div className='todo'>
        
        <label>
        Title
        <br></br>
        <input className='textbox' type="text" value={title} onChange={e=>setTitle(e.target.value)}></input>
        </label>
        <br></br>
        <label>
        Subtitle
        <br></br>
        <input className='textbox' type="text" value={subtitle} onChange={e=>setSubtitle(e.target.value)}></input>
        </label>
        <br></br>
        <label>
       ImageURL
       <br></br>
       <input className='textbox' type="text" value={image} onChange={e=>setImage(e.target.value)}></input>
        </label>
        <br></br>
        {
            edit ?(
                <button className='button' onClick={adddata}>Edit Todo</button>
            ):(
                <button className='button' onClick={adddata}>Submit</button>
            )
        }
        
         
        
        
    </div>
    <div className='cardcomp'>
            {
                data.map((arr)=>(
                    
                    <TodoContainer
                        key={arr.Id}
                        index={arr.Id}
                        title={arr.Title}
                        subtitle={arr.Subtitle}
                        image={arr.Image}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    
                    ></TodoContainer>
                   

            
                   
                ))
            }
        </div>
      </>
   
  )
}

export default Todo;



{/* <Cardcomp
                    key={arr.Id}
                    index={arr.Id}
                    title={arr.Title}
                    subtitle={arr.Subtitle}
                    image={arr.Image}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    ></Cardcomp> */}