import React, { useEffect, useState } from "react";
import { FaMagic, FaTrashAlt } from 'react-icons/fa';
type typeWishList = {
  books:Array<any>,
  removeFromWishList:any
}
const WishList = (props:typeWishList) => {
    
    return (
        <>
          <div className="nav-wishlist">
            <div className="button">
              <FaMagic className="wishListIcon" />
              <span>Wish List</span>
            </div>
          </div>
        <div className="wish-book-list">
          {props && props.books && props.books.map(book=>{
            return   <div className="wishlist_each_item">
              {book.title && <div className="wishlist_title"> {book.title} </div>}
            <button className="wishlist__searchbtn" onClick={()=>{props.removeFromWishList(book.id)}}>
                 <FaTrashAlt/> 
            </button>              
            </div>
          })}
           
        </div>
        </>
    );
};

export default WishList;
