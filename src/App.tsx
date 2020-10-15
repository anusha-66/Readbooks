import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import WishList from './wish-list/WishList';
import { FaBars } from 'react-icons/fa';


function App() {
  return (
    <div className="wrapper">
      <div className="content">
      <div className="header">
        <label>Urban Reads</label>
        <FaBars className="hamburger"/>
      </div>
        <div className="searchArea">
          <BookSearch/>
        </div>
      </div>
      <div className="wishList">
          <WishList/>
        </div>
    </div>
  );
}

export default App;
