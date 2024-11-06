
// import React from "react";
// import Addform from "./component/Addform";
// function EditForm(){
//     return(
//         <div>
// <h1>Edit form</h1>
//             <Addform/>

//         </div>
//     )
// }

// export default EditForm;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from './features/Crud/CrudSlice';

function EditForm({res,onclose}) {

console.log(res);
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.Crud.find((task) => task.id === res));
  console.log(task);

  const [formData, setFormData] = useState({
    name: task ? task.name : '',
    email: task ? task.email : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCard({ res,...formData }));//if spread operator not use then manually send the data like name:formdata.name or email:formdata.email
    navigate('/');
  };

  return (
    <div style={{width:"500px",height:"200px",border:"2px solid black", margin:"0 auto",marginTop:"20px",position:"relative"}}>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <button onClick={onclose} style={{position:"absolute" ,right:"0px",top:"0px"}}>Close</button>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <br />
        <br />
        <button type="submit" >Update</button>
      </form>
    </div>
  );
}


export default EditForm;
