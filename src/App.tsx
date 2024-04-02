import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import PracticeForm from './components/PracticeForm';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import useFetchUrl from './hooks/useFetchUrl';

import './App.css';
import Search from './pages/Search';
import {
  PracticePropsPassing_0,
  PracticePropsPassing_1,
  PracticePropsPassing_2,
  PracticePropsPassing_3,
} from './components/PracticePropsPassing';

const item = {
  id: 12,
  name: 'Fred',
  description: 'ice cream',
};

const images = [
  'https://via.placeholder.com/800x400/ff5733/fff',
  'https://via.placeholder.com/800x400/33ff57/fff',
  'https://via.placeholder.com/800x400/5733ff/fff',
];
function App() {
  const { data, error, isLoading } = useFetchUrl(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  console.log(data);

  return (
    <>
      <div>
        {' '}
        <PracticePropsPassing_0 item={item} />
        <PracticePropsPassing_1 {...item} />
        <PracticePropsPassing_2
          id={item.id}
          name={item.name}
          description={item.description}
        />
        <PracticePropsPassing_3 id={12} name="Fred" description="ice cream" />{' '}
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

/*
        <Carousel images={images} />
        */
