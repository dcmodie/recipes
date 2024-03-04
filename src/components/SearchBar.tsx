import { useState } from 'react';

interface sbProps {
  reFetch: () => void;
}

const SearchBar: React.FC<sbProps> = ({ reFetch }) => {
  const [value, setValue] = useState('');
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    reFetch(value);
  };
  return (
    <form onSubmit={submitForm} className="search-bar">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};
export default SearchBar;
