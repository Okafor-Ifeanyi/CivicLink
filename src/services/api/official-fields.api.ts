import { axiosInstance } from "../axios";

export const getCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data.data;
};

export const getStates = async () => {
  const response = await axiosInstance.get("/official-fields/states");
  return response.data.data;
};

export const getJurisdictions = async () => {
  const response = await axiosInstance.get("/official-fields/jurisdictions");
  return response.data.data;
};

export const getPositions = async () => {
  const response = await axiosInstance.get("/official-fields/positions");
  return response.data.data;
};

export const getLevels = async () => {
  const response = await axiosInstance.get("/official-fields/levels");
  return response.data.data;
};
