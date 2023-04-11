import React from 'react';
//import { useState, useEffect } from 'react';
//import React DOM from 'react-dom/client';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const Header = (props) => <h1>{props.label}</h1>;
const BtnArchive = (props) => <button className='btn'>{props.label}</button>;
const wishes = [
  {
    text: 'Travel to the moon',
    done: false,
  },
  {
    text: 'Visit Rome',
    done: true,
  },
  {
    text: 'Learn React',
    done: true,
  },
];

function App() {
  return (
    <div className="app">
      <Header label="My WISHLIST" />
      <WishInput />
      <WishList wishes={wishes} />
      <BtnArchive label="Archive done" />
    </div>
  );
}
export default App;
