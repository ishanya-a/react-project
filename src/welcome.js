import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
    let username = sessionStorage.getItem('username');
    // const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    return (
        <div>
            <h1 className="text-center">Welcome to User {username} </h1>
            <br/>  <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>
            <div align="center" >
            <button className="logout">
            <Link to={'/login'}>Logout</Link> 
            </button>
            </div>
            
        </div>
    );
}

export default Welcome;