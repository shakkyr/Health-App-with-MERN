import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { createWater } from "../api/health.api";
import { loader } from "./helpers/loading";
//components

const UserWaterModel = () => {
  const [water, setWater] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const user = JSON.parse( localStorage.getItem('user') );

    const handleMessages = (e) => {
      setErrorMsg("");
      setSuccessMsg("");
    };

    const handleWaterChange = (e) => {
      setErrorMsg("");
      setSuccessMsg("");
      setWater(e.target.value);
    };

      const handleWaterSubmit = (e) => {
        e.preventDefault();
        if (isEmpty(water)) {
          setErrorMsg("Please Tell how much you drank today");
        } else {
          const data = { water,user };
          setLoading(true);
          createWater(data)
            .then((response) => {
              setLoading(false);
              setSuccessMsg(response.data.successMessage);
              setWater("");
            })
            .catch((err) => {
              setLoading(false);
              setErrorMsg(err.response.data.errorMessage);
            });
        }
      };
  

    return (
        
      <div id="waterModel" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleWaterSubmit}>
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Keep Going Keep Healthy</h5>
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
                  <label className="text-secondary">I drank today :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="water"
                    value={water}
                    onChange={handleWaterChange}
                    placeholder="Liters drank"
                  />
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
          );
    
}

export default UserWaterModel


  