/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";
import { getWorkout,getFeeling,getSLeeping,getWater } from '../api/health.api';
import 'react-circular-progressbar/dist/styles.css';
import './UserDashboard.css';


//components
import UserHeader from "./UserHeader";
import UserActionBtns from "./UserActionBtns";
import UserFeelingModel from "./UserFeelingModel";
import UserWaterModel from "./UserWaterModel";
import UserWorkoutModel from "./UserWorkoutModel";
import UserSleepingModel from "./UserSleepingModel";
import UserInfo from "./UserInfo";
import CircularBar from "./CircularBar";







const UserDashboard = () => {

  const userData = JSON.parse( localStorage.getItem('user') );
    const [workout,setWorkout] = useState([])
    const [feeling,setFeeling] = useState([])
    const [water,setWater] = useState([])
    const [sleeping,setSleeping] = useState([])

  useEffect(() => {
    // setInterval(()=>{

      getWorkout(userData._id).then(usr =>{
        setWorkout(usr.data.allWorkout)
      })
  
      getFeeling(userData._id).then(usr =>{
        setFeeling(usr.data.allFeeling)
      })
  
      getSLeeping(userData._id).then(usr =>{
        setSleeping(usr.data.allSleeping)
      })
  
      getWater(userData._id).then(usr =>{
        setWater(usr.data.allWater)
      })
    // },7000)
   
  }, [])


  return (
    <section>
      <UserHeader />
      <div >
      <UserActionBtns />
      <UserSleepingModel  />
      <UserFeelingModel />
      <UserWaterModel  />
      <UserWorkoutModel />
     <CircularBar workout={workout} feeling={feeling} water={water} sleeping={sleeping} weight={userData.weight} age={userData.age}/>
      <UserInfo/>
      </div>
    </section>
  );
};

export default UserDashboard;
