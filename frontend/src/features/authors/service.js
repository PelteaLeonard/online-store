/*
    ACESTA E FISIERUL UNDE SE FAC REQUESTURILE CATRE BACKEND
*/

// IMPORT AXIOS, LIBRARIA CE NE AJUTA SA TRIMITEM CERERI CATRE BACKEND (REQUESTURI)
import axios from "axios";

// API ENDPOINT PENTRU RESURSA AUTHORS
const AUTHORS_API_ENDPOINT = `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/authors`;

// FUNCTIE CARE "ADUCE" TOTI AUTORII DIN BACKEND
const getAll = async () => {
  return await axios.get(AUTHORS_API_ENDPOINT);
};

// FUNCTIE CARE "ADUCE" AUTORUL DUPA ID
const getById = async (requestPayload) => {
  const { id } = requestPayload;
  return await axios.get(`${AUTHORS_API_ENDPOINT}/${id}`);
};

// CREEAZA OBIECTUL clientsService CU FUNCTIILE getAll, getById
export const authorsService = {
  getAll,
  getById,
};
