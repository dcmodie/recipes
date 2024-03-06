import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import PracticeForm from './components/PracticeForm';
import NavBar from './components/NavBar';
import useFetchUrl from './hooks/useFetchUrl';

import './App.css';
import Search from './pages/Search';
import {
  PracticePropsPassing_0,
  PracticePropsPassing_1,
  PracticePropsPassing_2,
} from './components/PracticePropsPassing';

const item = {
  id: 12,
  name: 'Fred',
  description: 'ice cream',
};

function App() {
  const { data, error, isLoading } = useFetchUrl(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  console.log(data);

  return (
    <>
      <div>
        {' '}
        <Search />
      </div>
    </>
  );
}

export default App;
/*<NavBar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PracticePropsPassing_0 item={item} />
        <PracticePropsPassing_1 {...item} />
        <PracticePropsPassing_2
          id={item.id}
          name={item.name}
          description={item.description}
        />
        <PracticeForm />
        <Search />*/
