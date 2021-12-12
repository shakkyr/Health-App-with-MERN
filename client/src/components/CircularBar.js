/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import React, {useState } from 'react';



const CircularBar = ({workout,feeling,water,sleeping,weight,age}) => {
  
const [fe , setFe] = useState(false);
const [wo , setWo] = useState(false);
const [sl , setSl] = useState(false);
const [wt , setWt] = useState(false);


  let date = new Date()

// !===========================================================================
  //! water drinking formula => weight / 30 = liters we should drink
 const waterArray=[];
 water.map(ele=>{
  if (ele.createdAt.slice(8,10) == date.getDate()){
    waterArray.push(parseFloat(ele.water))
    
  }
})
let waterDrank = waterArray.reduce((a, b) => a + b, 0);

 //function of weight
  let waterValue =waterDrank / (weight /30)

  // !===========================================================================
//   //! sleep hours : =>
//   toddlers (1–2 years): 11–14 hours
//   preschoolers (3–5 years): 10–13 hours
//   school-age children (6–13 years): 9–11 hours
//   teenagers (14–17 years): 8–10 hours
//   younger adults (18–25 years): 7–9 hours
//   adults (26–64 years): 7–9 hours
//   older adults (65 years and above): 7–8 hours


const sleepPerMonth = [];
sleeping.filter(ele=> {
  if (ele.createdAt.slice(5,7) == date.getMonth() +1){
    sleepPerMonth.push(parseFloat(ele.sleeping))
  }
})
let totalSleep = sleepPerMonth.reduce((a, b) => a + b, 0);

let recommendedSleepHours ;
if(age <= 2) recommendedSleepHours = 12.5
if(age > 2 && age <=5) recommendedSleepHours = 11.5
if(age > 5 && age <=13) recommendedSleepHours = 10
if(age > 13 && age <=17) recommendedSleepHours = 9
if(age > 17 && age <=25) recommendedSleepHours = 8
if(age > 25 && age <=64) recommendedSleepHours = 8
if(age > 65) recommendedSleepHours = 7.5

let sleepValue = (((totalSleep / (sleepPerMonth.length) ) *100) / recommendedSleepHours) /100


// !==============================================================
//! workout functions =>

const workoutsPerDay = [];
workout.filter(ele=> {
 if (ele.createdAt.slice(8,10) == date.getDate()){
   workoutsPerDay.push(ele.workout)
  }
})

let workoutValue = workoutsPerDay.length /6;

// !=================================================
// !====== feeling function ================

const feelingsPerDay = [];
feeling.filter(ele=> {
 if (ele.createdAt.slice(8,10) == date.getDate()){
   feelingsPerDay.push(ele.feeling)
  }
})

let badFeeling ;
let goodFeeling
 feelingsPerDay.forEach(ele=>{
  if(ele !== 'happy' && ele !== 'fine' && ele !=='great' && ele!== 'good') {
    badFeeling.push(ele)
  }
  else {
    goodFeeling = ele
  }
})


let healthValue = badFeeling ? 0.55 :  0.99  ; 


let healthcolor;
if (healthValue <=0.33) healthcolor ="red"
if (healthValue >0.33 &&healthValue <0.66 ) healthcolor ="orange"
if (healthValue >=0.66) healthcolor ="green"

let sleepcolor ;
if (sleepValue <=0.33) sleepcolor ="red"
if (sleepValue >0.33 &&sleepValue <0.66 ) sleepcolor ="orange"
if (sleepValue >=0.66) sleepcolor ="green"

let watercolor ;
if (waterValue <=0.33) watercolor ="red"
if (waterValue >0.33 &&waterValue <0.66 ) watercolor ="orange"
if (waterValue >=0.66) watercolor ="green"

let workcolor;
if (workoutValue <=0.33) workcolor ="red"
if (workoutValue >0.33 &&workoutValue <0.66 ) workcolor ="orange"
if (workoutValue >=0.66) workcolor ="green"

// !===================handle clicks =================
const feelClick = () =>{
  setFe(!fe)
}
const sleepClick = () =>{
  setSl(!sl)
}
const waterClick = () =>{
  setWt(!wt)
}
const workClick = () =>{
  setWo(!wo)
}

// !=================== healt axios request ====================







// !========================================================



  return (
    <div className="bg-light my-2">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-3 my-1" onClick={feelClick}> Health Meter<br/><br/><br/><br/>
          {fe ? (badFeeling.length > 0 ?`You shoud take care with your ${badFeeling[0]}` :`Great you are ${goodFeeling}`) : <CircularProgressbar value={healthValue} maxValue={1} text={`${(healthValue * 100).toFixed(2)} %`} styles={buildStyles({textColor:healthcolor,pathColor:healthcolor})} />}
          </div>
          <div className="col-md-3  my-1" onClick={sleepClick}> Monthly Sleeping Meter<br/><br/><br/>
          {sl ? (sleepValue < 0.66 ? `You really have a bad Sleeping happit it's recommended to Get ${recommendedSleepHours} sleeping hrs at Your Age`: `Good but Not enough`) : <CircularProgressbar value={sleepValue} maxValue={1} text={`${(sleepValue*100).toFixed(2) } %`} styles={buildStyles({textColor:sleepcolor,pathColor:sleepcolor})} />}
          </div>
          <div className="col-md-3  my-1" onClick={waterClick}> Water Drinking Meter<br/><br/><br/>
          {wt ?  (waterDrank === 0 ? `Are You serius!! Go Drink Now` : `You Should Drink ${weight/30} L every day`) : <CircularProgressbar value={waterValue} maxValue={1} text={`${(waterValue *100).toFixed(2)} %`} styles={buildStyles({textColor:watercolor,pathColor:watercolor})} />}
          </div>
          <div className="col-md-3  my-1" onClick={workClick}>Daily fitness Meter<br/><br/><br/><br/>
          {wo ? (workoutsPerDay.length === 0 ? `not Good you didn't train your body` : `keep going you already did ${workoutsPerDay.length} workouts`)  : <CircularProgressbar value={workoutValue} maxValue={1} text={`${(workoutValue*100).toFixed(2)} %`} styles={buildStyles({textColor:workcolor,pathColor:workcolor})} />}
          </div>
        </div>
      </div>
    </div>
    )
}


export default CircularBar


