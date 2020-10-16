import React, { useEffect, useState } from "react";
import { FaMagic } from 'react-icons/fa';
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
          {props.books.map(book=>{
            return   <div> {book.title}
            <button className="book__searchbtn" onClick={()=>{props.removeFromWishList(book.id)}}>Remove from Wish list</button>
                                
            </div>
          })}
           
        </div>
        </>
    );
};

export default WishList;
