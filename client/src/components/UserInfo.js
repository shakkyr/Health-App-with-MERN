/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState , useEffect} from 'react'
import axios from 'axios';


const UserInfo = () => {
    const [user, setUser] = useState([]);
    
    const userData = JSON.parse( localStorage.getItem('user') );
    

    useEffect(()=>{
        getUser()// eslint-disable-next-line
        
    },[])
    const getUser =() =>{
        
    let id = userData._id
  
    axios.post(`/api/user/`,{id:id}).then(res=>{
       
        setUser(res.data[0])
})
}



    return (
        <div>
            
        </div>
    )
}

export default UserInfo


