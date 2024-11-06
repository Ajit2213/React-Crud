import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Addform from "./Addform";
import { deleteCart } from "../features/Crud/CrudSlice";
import "./Task.css"
import { Link } from 'react-router-dom'
import EditForm from "../EditForm";

import { useState } from "react";

function TASK() {

  let[pop,setpop]=useState(false);
 let[ident,setident]=useState();
 console.log(pop);

  <h1>React Crud Operations </h1>
  let task = useSelector((state) => state.Crud);
  console.log(task);

let dispach=useDispatch();


let edit=(id)=>{
  console.log(id);
setident(id)
setpop(true);
}





let del=(id)=>{
 
dispach(deleteCart(id));
}

  return (
    <div className="second">
     
      {/* <Addform /> */}
      {/* <h1> <Link to={`/create`}>Create</Link></h1> */}
     <button> <Link to ={`/create`}>New Create</Link></button>
      <div className="center">

      <table >
        <thead>
          <tr>
            <th>ID</th> 
            <th>Name</th> 
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((work, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Sequential ID based on index */}
              <td>{work.name}</td> 
              <td>{work.email}</td>
              <td>
              {/* <Link to={`/edit/${work.id}`}>Edit</Link> */}
                <button onClick={()=>edit(work.id)}>Edit</button> 
                &nbsp; &nbsp;
              <button onClick={()=>del(work.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
   
    
    {
  pop && <EditForm  res={ident}  onclose={()=>setpop(false)} />
}
    </div>
  );
}

export default TASK;
