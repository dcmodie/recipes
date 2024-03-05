import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import PracticeForm from './components/PracticeForm';

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
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PracticePropsPassing_0 item={item} />
        <PracticePropsPassing_1 {...item} />
        <PracticePropsPassing_2
          id={item.id}
          name={item.name}
          description={item.description}
        />
        <PracticeForm />
        <Search />
      </div>
    </>
  );
}

export default App;
