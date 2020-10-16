import React, { useEffect, useState } from "react";
import { FaMagic } from 'react-icons/fa';
import { isPropertySignature } from "typescript";

type searchResult = {
    allAvailableBooks:Array<any>,
    addToWishList:any,
    wishList:Array<string>
}
const SearchResults = (props:searchResult) => {

    console.log(props, "props");

    return (
        <>
            <div className= "booksWrapper">
                {/* <pre>{JSON.stringify(props.allAvailableBooks, null, 4)}</pre> */}
                {props && props.allAvailableBooks &&
                    props.allAvailableBooks.length > 0 &&
                    props.allAvailableBooks.map((books: any) =>
                    {
                        const isAvailableInwishList = props.wishList.includes(books.id);
                        return (<div className="books">
                            <div className="books__img">
                                <img src= {books && books.imageLinks&& books.imageLinks.smallThumbnail}/>
                            </div>
                            <div className="books__info">
                                <div className="books__genre">
                                    <span>Author: {books && books.authors && books.authors.length && books.authors[0]}</span>
                                    <span>Genre: {books && books.categories && books.categories.length && books.categories[0]}</span>
                                </div>
                                <h1 className="books__title">{books.title}</h1>
                                <div className="books__description">{books.description}</div>
                                {isAvailableInwishList?
                                <button className="book__searchbtn" >Already Available in wish list</button>
                                :<button className="book__searchbtn" onClick={()=>{props.addToWishList(books.id)}}>Add to wish list</button>
                                }
                            </div>
                        </div>
                    )})
                    }
                    

            </div>
        </>
    );
};

export default SearchResults;