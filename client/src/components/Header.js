import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "./helpers/auth.helper";


const Header = ({history}) => {

  const handleLogout = (e) => {
        logout(()=>{
          history.push('/signin')
        });
  }



  const ShowNavigation = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand">
        <i className="fas fa-heartbeat text-danger"></i> Health Companion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ml-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/doctors" className="nav-link" aria-current="page">
                  <i className="fas fa-user-md"></i> Our Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link" aria-current="page">
                  <i className="fas fa-edit"></i> Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                  <i className="fas fa-sign-in"></i>  Signin
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/dashboard"
                    className="nav-link"
                    aria-current="page"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pharmacy" className="nav-link">
                    Pharmacy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/appointments" className="nav-link">
                    Appointments
                  </Link>
                </li>
                <li className=" btn-danger rounded ml-auto text-secondary ">
                  <Link to="/emergency" className="nav-link">
                  <i className="fas fa-ambulance"></i> Call Emergency
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link" aria-current="page">
                    My Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/schedule" className="nav-link">
                    Schedule
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && (
              <Fragment>
                <li className="logout ">
                  <input type="button" className="btn bg-info rounded text-secondary ml-auto p-2" value="Logout" onClick={handleLogout}/>
                
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
  return <header id="header">{ShowNavigation()}</header>;
};

export default withRouter(Header);
