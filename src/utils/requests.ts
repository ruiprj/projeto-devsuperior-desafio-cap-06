import { FilterData } from './../types/filter-data';
import axios from 'axios';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    storeId: filterData?.storeId
  };
};
