const useFetchImages = () => {
  const reFetch = async () => {
    console.log('fetching images ');
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    } catch {
    } finally {
    }
  };
  return { reFetch };
};

export default useFetchImages;
