import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { createSleeping ,} from "../api/health.api";
import { loader } from "./helpers/loading";
//components

const UserSleepingModel = () => {
  const [sleeping, setSleeping] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const user = JSON.parse( localStorage.getItem('user') );
  
    const handleMessages = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
      };

      const handleSleepingChange = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
        setSleeping(e.target.value);
      };

      const handleSleepingSubmit = (e) => {
        e.preventDefault();
        if (isEmpty(sleeping)) {
          setErrorMsg("did you sleep well!! ?");
        } else {
          const data = { sleeping,user};
          setLoading(true);
          createSleeping(data)
            .then((response) => {
              setLoading(false);
              setSuccessMsg(response.data.successMessage);
              setSleeping("");
            })
            .catch((err) => {
              setLoading(false);
              setErrorMsg(err.response.data.errorMessage);
            });
        }
      };
    

    return (
      <div id="sleepingModel" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleSleepingSubmit}>
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">good morning</h5>
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
                  <label className="text-secondary">I Already slept :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sleeping"
                    value={sleeping}
                    onChange={handleSleepingChange}
                    placeholder='pushUps, Squats, Side planks....'/>
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" data-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
          );
}

export default UserSleepingModel
