import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import WishList from './wish-list/WishList';
import { FaBars } from 'react-icons/fa';
import { getBooksByType } from "./service/book-search.service";

function App() {
  const [bookType, updateBookType] = useState("");
  const [bookTypeToSearch, updateBookTypeToSearch] = useState("");  
  const [allAvailableBooks, setAllAvailableBooks] = useState<any>([]);
  const [wishList, updateWishList] = useState<any>([]);

    useEffect(() => {
             requestBooks();
    }, [bookTypeToSearch]);

  const requestBooks = async () => {
    if (bookTypeToSearch) {
        const allBooks = await getBooksByType(bookTypeToSearch);
        setAllAvailableBooks(allBooks);
    }
}
const addToWishList = (id:string) =>{
  updateWishList([...wishList,id]);
}
const removeFromWishList = (id:string) => {
  updateWishList(wishList.filter((bookId:string)=>bookId!==id));
}

  return (
    <div className="wrapper">
      <div className="content">
      <div className="header">
        <label>Urban Reads</label>
        <FaBars className="hamburger"/>
      </div>
        <div className="searchArea">
          <BookSearch books={allAvailableBooks}
          bookType={bookType}
          updateBookType={updateBookType}
          updateBookTypeToSearch={updateBookTypeToSearch}
          addToWishList={addToWishList}
          wishList={wishList}
          />
        </div>
      </div>
      <div className="wishList">
          <WishList 
          books={allAvailableBooks.filter((item:any)=>wishList.includes(item.id))}
          removeFromWishList={removeFromWishList}
          />
        </div>
    </div>
  );
}

export default App;
