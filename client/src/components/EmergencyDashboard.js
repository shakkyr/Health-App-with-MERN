
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
// import {sendEmail} from '../api/emergency.api'
import "./EmergencyDashboard.css";

const EmergencyDashboard =() => {
  const [center, setCenter] = React.useState({
    lat: "",
    lng: "",
  });
    const [user,setUser] = useState({
        name : '',
        age : '',
        weight : '',
        height : '',
        email : '',
       
    })
  
    const userInfo = JSON.parse( localStorage.getItem('user') );
    
    const userData = () => {
      setUser({
        ...userInfo,
        name:userInfo.username,
        age:userInfo.age,
        weight:userInfo.weight,
        height:userInfo.height,
        email:userInfo.email
        
      })  
    }  
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCenter({
          ...position,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    };

    useEffect(() => {
        getLocation()
        userData()
        // sendEmail(user,center)
    },[])    


    // const handleSend = async () => {
    //   try {
    //     await axios.post("/api/forma", {user
    
    //     })
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }


 return (
  <div className='emergency-container'>
        <div className='row px-3 vh-100'>
            <div className='col-md-5 mx-auto align-self-center'>
               
                    <div className='text-center pb-4'>
                        <h1>Stay Calm The We have Sent You The Help</h1>
                        <h3>{user.username} age {user.age}</h3>
                        <p> {user.weight} Kg </p>
                        <p>{user.height} cm</p>
                        <br/>
                        <h2 style={{color:'green'}}>You at  {center.lat} {center.lng} </h2>
                    </div>
                
                
            </div>
        </div>
    </div>
  );
}

export default EmergencyDashboard;
