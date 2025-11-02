import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MyEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});

   const loadData=async()=>{
     let api = `http://localhost:8000/employees/editdisplay?id=${id}`;
     const response = await axios.get(api);
     console.log(response.data);
     setMydata(response.data);
   }

useEffect(()=>{
    loadData();
}, []);
     return(
        <>
          <h1> My Edit {id}</h1>
          Edit Empno <input type="text" value={mydata.empno} />
          <br />
           Edit Name <input type="text"  value={mydata.name} />
          <br />
           Edit Designation <input type="text"  value={mydata.designation} />
          <br />
           Edit Salary <input type="text"  value={mydata.salary} />
          <br />
        
        </>
     )
}

export default MyEdit;