import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { createWorkout } from "../api/health.api";
import { loader } from "./helpers/loading";
//components

const UserWorkoutModel = () => {
  const [workout, setWorkout] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const user = JSON.parse( localStorage.getItem('user') );
  
    const handleMessages = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
      };

      const handleWorkoutChange = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
        setWorkout(e.target.value);
      };

      const handleWorkoutSubmit = (e) => {
        e.preventDefault();
        if (isEmpty(workout)) {
          setErrorMsg("Please Tell what exercises you did today");
        } else {
          const data = { workout,user};
          setLoading(true);
          createWorkout(data)
            .then((response) => {
              setLoading(false);
              setSuccessMsg(response.data.successMessage);
              setWorkout("");
            })
            .catch((err) => {
              setLoading(false);
              setErrorMsg(err.response.data.errorMessage);
            });
        }
      };
    

    return (
      <div id="workOutModel" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleWorkoutSubmit}>
            <div className="modal-header bg-secondary text-white">
              <h5 className="modal-title">Go Champ!!</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-2">
              {errorMsg && showErrorMessage(errorMsg)}
              {successMsg && showSuccessMessage(successMsg)}
              {loading ? (
                <div className="text-center">{loader()}</div>
              ) : (
                <Fragment>
                  <label className="text-secondary">I Already Did Workout :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="workout"
                    value={workout}
                    onChange={handleWorkoutChange}
                    placeholder='pushUps, Squats, Side planks....'/>
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
          );
}

export default UserWorkoutModel




  