import useSWR from "swr";
import { OfficialFieldFilter, Official } from "../../types/official.type";
import { getGovernmentOfficials } from "../api/official.service";

export const useOfficials = (filters: OfficialFieldFilter) => {
  const { data, isLoading, error, mutate } = useSWR<Official[]>(
    ["officials", filters],
    () => getGovernmentOfficials(filters)
  );

  return {
    officials: data,
    isOfficialsLoading: isLoading,
    officialsError: error,
    mutateOfficials: mutate,
  };
};
