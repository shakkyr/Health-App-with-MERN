import React from 'react'
import Greeting from './Greeting'
// import AdminHeader from './AdminHeader';
const AdminDashboard = () => {
    

    const showHeader = () => (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                           <i> <Greeting/></i>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        
    )

    const showActionBtns = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block" data-bs-toggle="collapse" data-target="#addCategoryModal">
                                <i className="fas fa-plus"> Add Data</i>
                        </button>
                    </div>
                    <div className="col-md-4  my-1">
                        <button className="btn btn-outline-warning btn-block">
                                <i className="fas fa-plus"> sss</i>
                        </button>
                    </div>
                    <div className="col-md-4  my-1">
                        <button className="btn btn-outline-success btn-block">
                                <i className="fas fa-plus"> Show</i>
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    )

    const showCategoryModal = () => (
        <div id="addCategoryModal" className="modal">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-info text-white">
                        <h5 className="modal-title">Add Info</h5>
                        <button className="close" data-dismiss="modal">
                            <span>
                                <i className="fas fa-times"></i>
                            </span>
                        </button>
                    </div>
                    <div className="modal-body my-2">
                        <form>
                            <label className="text-secondary">Date</label>
                            <input type="text" className="form-control" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button className="btn btn-info" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

    
    return(
         <section>
         {showHeader()}
         {showActionBtns()}
         {showCategoryModal()}
          </section>
         )
    
}

export default AdminDashboard
