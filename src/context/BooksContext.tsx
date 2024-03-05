import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }: { children: React.FC }) {
  const [books, setBooks] = useState();
  const fetch = async () => {
    console.log('fetchinggg');
    try {
      //      const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
      const result = await fetch(
        'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json.products);
        });
    } catch {
      console.log('error');
    } finally {
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
