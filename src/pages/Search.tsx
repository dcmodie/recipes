import useFetchRecipes from '../hooks/useFetchRecipes';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import BooksContext from '../context/BooksContext';
import { useContext } from 'react';
import useFetchURL from '../hooks/useFetchUrl';
const Search = () => {
  const { data, isLoading, error, reFetch } = useFetchRecipes();
  const { books, fetch } = useContext(BooksContext);

  const {
    data: d0,
    error: e0,
    isLoading: i0,
  } = useFetchURL('https://jsonplaceholder.typicode.com/todos/1');
  console.log('in serach ', d0);

  // const handleSearch = () => {
  //   reFetch();
  // };

  const renderData: React.FC = () => {
    if (!data) return;
    if (isLoading) {
      return <div>loading... </div>;
    }
    return data.map((item) => {
      return <Card item={item} key={item.id} />;
    });
  };

  const handleFetch = () => {
    console.log('calling fetch from ');
    //dreFetch('beef');
  };

  return (
    <div>
      <button onClick={handleFetch}>click</button>
      <SearchBar reFetch={reFetch} />

      <div className="search-page-grid">{renderData()}</div>
    </div>
  );
};
export default Search;
