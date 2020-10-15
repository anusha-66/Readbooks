import React, { useEffect, useState } from "react";
import { FaMagic } from 'react-icons/fa';
import { isPropertySignature } from "typescript";

const SearchResults = (props: { allAvailableBooks: [] }) => {

    console.log(props, "props");

    return (
        <>
            <div className= "booksWrapper">
                {/* <pre>{JSON.stringify(props.allAvailableBooks, null, 4)}</pre> */}
                {props && props.allAvailableBooks &&
                    props.allAvailableBooks.length > 0 &&
                    props.allAvailableBooks.map((books: any) =>
                        <div className="books">
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
                                <button className="book__searchbtn">Add to wish list</button>
                            </div>
                        </div>
                    )}

            </div>
        </>
    );
};

export default SearchResults;