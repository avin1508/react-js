import React from 'react';
import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useDispatch, useSelector } from 'react-redux';
import { addTopaste, updatePastes } from '../redux/pasteSlice';
import { useSearchParams } from 'react-router-dom';



const Home = () => {

    const [ value, setValue] = useState("");
    const [ title, setTitle] = useState("");
    const [searchParms, setSearchParms] = useState("");
    const pasteId = searchParms.length("pasteId");
    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();


    const createPaste = () =>{
        const paste = {
            title: title, 
            content: value,
            _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString()
        };

        if(pasteId){
            dispatch(updatePastes(paste));
        }else {
            dispatch(addTopaste(paste))
        }

        setTitle("");
        setValue("");
        setSearchParms({});
    }
  return (
    <div>
    </div>
  )
}

export default Home
