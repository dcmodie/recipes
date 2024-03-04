import useFetchRecipes from '../hooks/useFetchRecipes';
const Search = () => {
  const { data, isLoading, error, reFetch } = useFetchRecipes();

  const handleSearch = () => {
    //reFetch (search term)
    reFetch();
  };

  return (
    <div>
      <div className="search-bar">search bar</div>
      <button onClick={handleSearch}>click me </button>
      <div className="search-page-grid">
        <div className="box">a</div>
        <div className="box">a</div>
        <div className="box">a</div>
        <div className="box">a</div>
        <div className="box">a</div>
      </div>
    </div>
  );
};
export default Search;
