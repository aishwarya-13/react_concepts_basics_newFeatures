import React,{useEffect, useState} from "react";
import axios from "axios";
import TableBody from "./table-body";
import TableHead from "./table-head";

const Table = ({title})=>{
    const [tablehead, setTablehead] = useState(null);
    const [tablebody, setTablebody] = useState(null);

    const fetchUsersData = ()=>{
        axios.get('users.json').then((res)=>{
            if(res && res.data && res.data.users){
                restructureData(res.data.users);
                
            }
        }).catch((err)=>{
            throw err;
        });
    }

    /**
     * For table body create array of objects
     * For table head create array of string
     */
    const restructureData = (data)=>{
        const arrBody = [],
            arrHead = [];
        //Create array of objects for table body
        for(let key in data){
            arrBody.push(data[key]);
        }
        //Create array of strings for table head
        for(let key in arrBody[0]){
            arrHead.push(key);
        }
        setTablebody(arrBody);
        setTablehead(arrHead);
    };

    useEffect(()=>{
        fetchUsersData();
    },[]);

    return(
        <div>
            <h1>{title}</h1>
            <table>
                <TableHead data={tablehead}/>
                <TableBody data={tablebody}/>
            </table>
        </div>
    )
};

export default Table;