import useFetchRecipes from '../hooks/useFetchRecipes';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
const Search = () => {
  const { data, isLoading, error, reFetch } = useFetchRecipes();

  // const handleSearch = () => {
  //   reFetch();
  // };

  const renderData = () => {
    if (!data) return;
    if (isLoading) {
      return <div>loading... </div>;
    }
    return data.map((item) => {
      return <Card item={item} key={item.id} />;
    });
  };

  return (
    <div>
      <SearchBar reFetch={reFetch} />

      <div className="search-page-grid">{renderData()}</div>
    </div>
  );
};
export default Search;
