import axios from 'axios';
import { BASE_URL, URLs } from '../ListAllData';

export const findById_API = async (id) => {
  const response = await axios.get(BASE_URL + URLs.VIEW + "/" + id);
  return response.data.name;
};


export const fetchAllData_API = async () => {
  const response = await axios.get(BASE_URL + URLs.FETCHALL);
  return response.data;
};

export const deleteById_API = async (id) => {
  const response = await axios.delete(BASE_URL + URLs.DELETE + "/" + id);
  return response.data;
};

export const saveorUpdateData_API = async (id, requestBody) => {
  if (id !== 0) {
    let response = await axios.put(BASE_URL + URLs.UPDATE+ "/" + id, requestBody);
    return response.data.message;
  }
  else {
    let response = await axios.post(BASE_URL + URLs.CREATE, requestBody);
    return response.data.message;
  }


}; 