/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getDoctor/*, getAllDoctor */} from "../api/doctor.api";
import "./Doctors.css";

const Doctors = () => {
  const [doctor, setDoctor] = useState(null);
  const [special, setSpecial] = useState("");


  let firstDoc = 'Allergists'
useEffect (()=> {
    // getAllDoctor(role).then((doc) => {
    //     setDoctor(doc.data);
    //   });
    getDoctor(firstDoc).then((doc) => {
        setDoctor(doc.data);
      });

},[])


  const handleChange = (e) => {
    setSpecial(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    getDoctor(special).then((doc) => {
      setDoctor(doc.data);
    });
  };


  return (
    <div className="docotors-container">
      <div className="">
        <form onSubmit={handlSubmit}>
          <select name="specalise" onChange={handleChange} className="form-control">
            <option value="all">All</option>
            <option value="Anesthesiologists">Anesthesiologists</option>
            <option value="Allergists">Allergists</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Colon and Rectal Surgeons">
              Colon and Rectal Surgeons
            </option>
            <option value="Critical Care Medicine Specialists">
              Critical Care Medicine Specialists
            </option>
            <option value="Dermatologists">Dermatologists</option>
            <option value="Endocrinologists">Endocrinologists</option>
            <option value="Emergency Medicine Specialists">
              Emergency Medicine Specialists
            </option>
            <option value="Family Physicians">Family Physicians</option>
            <option value="Gastroenterologists">Gastroenterologists</option>
            <option value="Geriatric Medicine Specialists">
              Geriatric Medicine Specialists
            </option>
            <option value="Hematologists">Hematologists</option>
            <option value="Hospice and Palliative Medicine Specialists">
              Hospice and Palliative Medicine Specialists
            </option>
            <option value="Infectious Disease Specialists">
              Infectious Disease Specialists
            </option>
            <option value="Internists">Internists</option>
            <option value="Medical Geneticists">Medical Geneticists</option>
            <option value="Nephrologists">Nephrologists</option>
            <option value="Neurologists">Neurologists</option>
            <option value="Obstetricians and Gynecologists">
              Obstetricians and Gynecologists
            </option>
            <option value="Oncologists">Oncologists</option>
            <option value="Ophthalmologists">Ophthalmologists</option>
            <option value="Osteopaths">Osteopaths</option>
            <option value="Otolaryngologists">Otolaryngologists</option>
            <option value="Pathologists">Pathologists</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Physiatrists">Physiatrists</option>
            <option value="Plastic Surgeons">Plastic Surgeons</option>
            <option value="Podiatrists">Podiatrists</option>
            <option value="Preventive Medicine Specialists">
              Preventive Medicine Specialists
            </option>
            <option value="Psychiatrists">Psychiatrists</option>
            <option value="Pulmonologists">Pulmonologists</option>
            <option value="Radiologists">Radiologists</option>
            <option value="Rheumatologists">Rheumatologists</option>
            <option value="Sleep Medicine Specialists">
              Sleep Medicine Specialists
            </option>
            <option value="Sports Medicine Specialists">
              Sports Medicine Specialists
            </option>
            <option value="General Surgeons">General Surgeons</option>
            <option value="Urologists">Urologists</option>
          </select>
          <input
            type="submit"
            className="btn btn-primary"
            value="See Doctor's Info"
          />
        </form>
        <div className="col-sm-4"></div>
        <div className="row ">
        <h3 className="text-center ml-4 mr-2">{doctor && doctor.doctor[0].username}</h3><h6>({doctor && doctor.doctor[0].specalist} with {doctor && doctor.doctor[0].experince} of experince</h6>)
        </div>
         <div className="col-8"><img
              alt="doctor"
              className="userImage img-fluid"
              src={`https://github.com/shakkyr/Health-App-with-MERN/blob/main/client/src/components/images/${doctor && doctor.doctor[0].image}?raw=true`}
              style={{ width: "35%", borderRadius: "5%" }}
            ></img></div>
    <div class="col-5 text-body">Age: {doctor && doctor.doctor[0].age}</div>
    <div class="col-5 text-body">{doctor && doctor.doctor[0].email}</div>
    <div class="col-5 text-body">{doctor && doctor.doctor[0].phone}</div>
    <div class="col-8 text-body"> {doctor && doctor.doctor[0].description}</div>
 
       
        <div className="col-md-5 mx-auto align-self-center">
        

          <div className="text-center pb-4"></div>
          
          

        </div>
      </div>
    </div>
  );
};

export default Doctors;
