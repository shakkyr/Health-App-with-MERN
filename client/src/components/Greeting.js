import React,{useState , useEffect} from 'react'
import axios from 'axios';
import logo from './images/avatar.jpg'
import './Greeting.css'


const Greeting = ()=> {
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


let date = new Date();


const hours = date.getHours();
let greetings;
if (hours < 12) greetings = 'good morning'
if ( hours >= 12 && hours <17) greetings = 'good after noon'
if ( hours >= 17 && hours <24) greetings = 'good evening'
    return (
        <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
            <img
              alt="user"
              className="userImage"
              src={user.image ? `https://github.com/shakkyr/Health-App-with-MERN/blob/main/client/src/components/images/${user.image}?raw=true` : logo}
              style={{ width: "35%", borderRadius: "5%" }}
            ></img><br/>
            <div className="user__header">
                <div>
                {greetings}<br/>
             {user.username}
             {user.image}<br/>
                </div>
                <div>
                  age: {user.age}<br/>
                  weight: {user.weight}<br/>
                  height: {user.height}<br/>
                </div>
            </div>
           
          
        </div>
      </div>
    </div>
    )
}

export default Greeting
