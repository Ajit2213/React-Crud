import { createSlice,nanoid } from '@reduxjs/toolkit'
import EditForm from '../../EditForm';

const initialState = {
  Crud:[{id:1,name:"Ajit",email:"ajit8080@gmail.com"}]
}


export const CrudSlice=createSlice({
    name:'Crud',
    initialState,
    reducers:{
      addtoCart:(state,action)=>{
        const{name,email}=action.payload;
             let newcreate={
              id:nanoid(),
              name:name,
              email:email

             }

        state.Crud.push(newcreate);
      },


deleteCart:(state,action)=>{
  state.Crud=state.Crud.filter((data)=>data.id !=action.payload)
},



updateCard:(state,action)=>{
  const{res,name,email}=action.payload;
  let existingdata=state.Crud.find((data)=>data.id==res);
  if(existingdata){
    existingdata.name=name;
    existingdata.email=email;
  }
}



    },
  

})



export const{addtoCart,deleteCart,updateCard}=CrudSlice.actions
export default CrudSlice.reducer