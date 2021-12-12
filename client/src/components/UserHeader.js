import React from "react";
import Greeting from "./Greeting";







const showHeader = () => (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i> <Greeting/> </i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );

  export default showHeader