import axios from 'axios';
import { useEffect, useState, useReducer } from 'react';

const dataFetchReducer = (state, action) => {
  if (action.type === 'FETCH_INIT') {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }
  if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isError: false,
      data: action.payload,
    };
  }
  if (action.type === 'FETCH_FAIL') {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  return new Error();
};

export const useHacKerNewsApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const initialState = {
    isLoading: false,
    isError: false,
    data: initialData,
  };

  const [dataFetchstate, dataFetchDispatch] = useReducer(
    dataFetchReducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dataFetchDispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        dataFetchDispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dataFetchDispatch({ type: 'FETCH_FAIL' });
      }
    };

    fetchData();
  }, [url]);

  return [dataFetchstate, setUrl];
};
