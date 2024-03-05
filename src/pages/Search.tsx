import useFetchRecipes from '../hooks/useFetchRecipes';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import BooksContext from '../context/BooksContext';
import { useContext } from 'react';
const Search = () => {
  const { data, isLoading, error, reFetch } = useFetchRecipes();
  const { books, fetch } = useContext(BooksContext);

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
    //reFetch('beef');
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
