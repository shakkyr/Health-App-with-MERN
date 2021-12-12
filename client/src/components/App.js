import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import EmergencyDashboard from './EmergencyDashboard';
import PharmacyMap from './PharmacyMap';
import Doctors from './Doctors';


const App = () => {
    return (
      <BrowserRouter>
         <Header />
         <main>
        <Switch>
          <Route exact path="/" component={Home }/>
          <Route exact path="/doctors" component={Doctors }/>
          <Route exact path="/signup" component={Signup }/>
          <Route exact path="/signin" component={Signin }/>
          <Route exact path="/emergency" component={EmergencyDashboard }/>
          <Route exact path="/pharmacy" component={PharmacyMap }/>
          <UserRoute exact path="/user/dashboard" component={UserDashboard }/>
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard }/>
          {/* <Route path="/Transections" element={<Transections />}/> */}
    
      
          </Switch>
        </main>
        </BrowserRouter>
    )
    };



export default App;


