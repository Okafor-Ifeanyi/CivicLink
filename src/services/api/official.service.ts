import { OfficialFieldFilter } from "../../types/official.type";
import { axiosInstance } from "../axios";

export const getGovernmentOfficials = async (filters: OfficialFieldFilter) => {
  const response = await axiosInstance.get("/officials", {
    params: filters,
  });
  return response.data.data;
};
