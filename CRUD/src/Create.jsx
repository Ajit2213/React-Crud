import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Addform from './component/Addform';

function Create(){
    return(
        <div>
<h1>New Data Create</h1>
<Addform/>
        </div>
    )
};


export default Create;