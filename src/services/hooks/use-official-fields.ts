import useSWR from "swr";
import {
  getCategories,
  getJurisdictions,
  getLevels,
  getPositions,
  getStates,
} from "../api/official-fields.api";
import { Category } from "../../types/official.type";

export const useCategories = () => {
  const { data, error, isLoading } = useSWR<Category[]>(
    "/categories",
    getCategories
  );

  return {
    categories: data,
    isCategoriesLoading: isLoading,
    categoriesError: error,
  };
};

export const useStates = () => {
  const { data, error, isLoading } = useSWR<string[]>(
    "/official-fields/states",
    getStates
  );

  return {
    states: data,
    isStatesLoading: isLoading,
    statesError: error,
  };
};

export const useJurisdictions = () => {
  const { data, error, isLoading } = useSWR<string[]>(
    "/official-fields/jurisdictions",
    getJurisdictions
  );

  return {
    jurisdictions: data,
    isJurisdictionsLoading: isLoading,
    jurisdictionsError: error,
  };
};

export const usePositions = () => {
  const { data, error, isLoading } = useSWR<string[]>(
    "/official-fields/positions",
    getPositions
  );

  return {
    positions: data,
    isPositionsLoading: isLoading,
    positionsError: error,
  };
};

export const useLevels = () => {
  const { data, error, isLoading } = useSWR<string[]>(
    "/official-fields/levels",
    getLevels
  );

  return {
    levels: data,
    isLevelsLoading: isLoading,
    levelsError: error,
  };
};
