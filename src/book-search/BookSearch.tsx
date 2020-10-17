import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "../search-results/SearchResults";

type booksProps ={
    books:Array<any>,
    bookType:string,
    updateBookType:any,
    updateBookTypeToSearch :any,
    addToWishList:any,
    wishList:Array<string>


}

const BookSearch = (props:booksProps) => {
    

    // const volumeInfo = allAvailableBooks &&  allAvailableBooks.items &&allAvailableBooks.items.map((item: any) => item.volumeInfo);
   // console.log(allAvailableBooks, "allavailablebooks");

   // const ComponentProps = {
     //   allAvailableBooks: allAvailableBooks
    //}

    const onChange = (e:any) => {
        props.updateBookType(e.target.value);
        props.updateBookTypeToSearch(props.bookType);
    }
    return (
        <>
            <div className="search__container">
                <div className="search__wrapper">
                    <div className="search">
                        <form
                            onSubmit={(e) => {
                                
                                e.preventDefault();
                                props.updateBookTypeToSearch(props.bookType)
                            }}
                        >
                            <input
                                className="search-bar__input"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={props.bookType}
                                placeholder="Search for books"
                                // onChange={e => updateBookType(e.target.value)}
                                onChange={onChange}
                            />
                            <button >
                                <FaSearch className="search-bar__submit"/>
                            </button>
                        </form>

                        {/* placeholder code */}
                        {!(props.bookType) && (
                            <div className="empty">
                                <p>
                                    Try searching for a topic
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className="searchContent">
            {props.books && <SearchResults allAvailableBooks={props.books} addToWishList={props.addToWishList} wishList={props.wishList}/>}
            </div>
            
            {/* {allAvailableBooks && (<div className="searchResults">
                <pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>
            </div> */}
            {/* )} */}
        </>
    );
};

export default BookSearch;
