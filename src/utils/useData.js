import { useEffect, useState } from "react";

const useData = () =>{

    const [Data,setData]=useState(null);

    useEffect(()=>{
       fetchData(); 
    },[]);
    const fetchData= async () =>{
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setData(json);
    };

    return Data;
};

export default useData;