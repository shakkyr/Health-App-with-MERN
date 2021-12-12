import React from 'react'

const UserActionBtns = () => (
    <div className="bg-light my-2">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-3 my-1">
            <button
              className="btn btn-outline-success btn-block"
              data-toggle="modal"
              data-target="#addFeelingModel"
            >
              <i className="fas fa-plus"> Add Feeling</i>
            </button>
          </div>
          <div className="col-md-3  my-1">
            <button
              className="btn btn-outline-warning btn-block"
              data-toggle="modal"
              data-target="#sleepingModel"
            >
              <i className="fas fa-plus"> Sleep Hours</i>
            </button>
          </div>
          <div className="col-md-3  my-1">
            <button
              className="btn btn-outline-primary btn-block"
              data-toggle="modal"
              data-target="#waterModel"
            >
              <i className="fas fa-plus"> Water Statues</i>
            </button>
          </div>
          <div className="col-md-3  my-1">
            <button
              className="btn btn-outline-secondary btn-block"
              data-toggle="modal"
              data-target="#workOutModel"
            >
              <i className="fas fa-plus"> Add Workouts</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

export default UserActionBtns
