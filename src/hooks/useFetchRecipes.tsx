import { useState } from 'react';

interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Product {
  image: string;
  id: number;
  title: string;
  imageType: string;
}

const useFetchRecipes = () => {
  const [data, setData] = useState<Product[]>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //
  const reFetch = async (term: string) => {
    console.log('fetching ', term);
    try {
      setIsLoading(true);
      //      const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
      const response = await fetch(
        `https://api.spoonacular.com/food/products/search?query=${term}&apiKey=d8044c3a1b6d474393e403e882eb71a7`
      );
      if (!response.ok) {
        setError('Error fetching data');
        return error;
      }
      const retVal = await response.json();
      console.log('in useFR', retVal);
      setData(retVal.products);
    } catch {
      console.log('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };
  return { reFetch, isLoading, error, data };
};
export default useFetchRecipes;

//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=d8044c3a1b6d474393e403e882eb71a7
