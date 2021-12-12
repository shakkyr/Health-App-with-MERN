import axios from 'axios'

export const getDoctor= async (special) => {
    
    const response = await axios.get(`/api/doctor/${special}`);
    
    return response;
};
