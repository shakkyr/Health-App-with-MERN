import axios from "axios";
//! ============== feelings ======================
export const createFeeling = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/feeling", formData, config);

  return response;
};

export const getFeeling = async (id) => {
  const response = await axios.get(`/api/feeling/${id}`);

  return response;
};

//! ====================== skeeping ========================
export const createSleeping = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/sleeping", formData, config);

  return response;
};

export const getSLeeping = async (id) => {
  const response = await axios.get(`/api/sleeping/${id}`);

  return response;
};

// !=================== workout ===============================

export const createWorkout = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/workout", formData, config);

  return response;
};

export const getWorkout = async (id) => {
  const response = await axios.get(`/api/workout/${id}`);

  return response;
};
// !====================== water ======================

export const createWater = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/water", formData, config);

  return response;
};

export const getWater = async (id) => {
  const response = await axios.get(`/api/water/${id}`);

  return response;
};
