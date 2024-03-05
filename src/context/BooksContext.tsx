import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }: { children: React.FC }) {
  const [books, setBooks] = useState();
  const fetch = async () => {
    console.log('fetchinggg');
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
      );
      console.log(result.data);
    } catch {
      console.log('error');
    }
  };
  const valueToShare = {
    books: books,
    fetch: fetch,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export default BooksContext;
export { Provider };
//https://api.github.com/users/100/repos//
//https://api.spoonacular.com/food/products/search?query=${term}&apiKey=d8044c3a1b6d474393e403e882eb71a7
