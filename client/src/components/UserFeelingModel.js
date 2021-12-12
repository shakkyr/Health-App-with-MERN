import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { createFeeling } from "../api/health.api";
import { loader } from "./helpers/loading";
//components

const UserFeelingModel = () => {
    const [feeling, setFeeling] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const user = JSON.parse( localStorage.getItem('user') );

    const handleMessages = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
      };

    const handleFeelingChange = (e) => {
        setErrorMsg("");
        setSuccessMsg("");
        setFeeling(e.target.value);
      };

      const handleFeelingSubmit = (e) => {
        e.preventDefault();
            if (isEmpty(feeling)) {
          setErrorMsg("Please Tell What You Feel");
        } else {
          const data = { feeling,user };
              setLoading(true);
          createFeeling(data)
            .then((response) => {
              setLoading(false);
              setSuccessMsg(response.data.successMessage);
              setFeeling("");
            })
            .catch((err) => {
              setLoading(false);
              setErrorMsg(err.response.data.errorMessage);
            });
        }
      };
     
    return (
            <div id="addFeelingModel" className="modal" onClick={handleMessages}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <form onSubmit={handleFeelingSubmit}>
                    <div className="modal-header bg-success text-white">
                      <h5 className="modal-title">Tell us what You Feel</h5>
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
                          <label className="text-secondary">I Feel Today :</label>
                          <input
                            type="text"
                            className="form-control"
                            name="feeling"
                            value={feeling}
                            onChange={handleFeelingChange}
                          />
                        </Fragment>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
    
}

export default UserFeelingModel
