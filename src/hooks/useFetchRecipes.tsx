import { useState } from 'react';

const useFetchRecipes = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const reFetch = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch {
      console.log('error');
    }
  };
  return { reFetch, isLoading, error, data };
};
export default useFetchRecipes;
