import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addtoCart } from "../features/Crud/CrudSlice";
import { useNavigate } from "react-router-dom";
import "./Addform.css"
export default function Addform(){
    const navigate = useNavigate();
    let [all,setall]=useState({
        name:"",
        email:""
    });

let dispatch=useDispatch();
    let handler=(event)=>{
        let fieldname=event.target.name
        let fieldvalue=event.target.value
        console.log(fieldname,fieldvalue);
     setall((prev)=>{
        return {
            ...prev,
            [fieldname]:fieldvalue
        }
     })
    }


    let done=(event)=>{
        event.preventDefault();
dispatch(addtoCart(all));
setall({
    name:"",
    email:""
})
navigate('/');
    }


    // let task=useSelector((state)=>state);
    // console.log(task);
    return(
        <div className="third">


<form onSubmit={done} >

<input type="text" placeholder="username" value={all.name} onChange={handler} name="name" id="name"/>
<br /> <br />
<input type="email"  placeholder="user email" value={all.email}   onChange={handler} name="email" id="email"/>
<br /> <br />
<button>submit</button>

</form>
        </div>
    )
}