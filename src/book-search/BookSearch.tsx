import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "../search-results/SearchResults";
import { getBooksByType } from "./book-search.service";


const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState<any>([]);
    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    // const volumeInfo = allAvailableBooks &&  allAvailableBooks.items &&allAvailableBooks.items.map((item: any) => item.volumeInfo);
    console.log(allAvailableBooks, "allavailablebooks");

    const ComponentProps = {
        allAvailableBooks: allAvailableBooks
    }

    const onChange = (e:any) => {
        updateBookType(e.target.value);
        updateBookTypeToSearch(bookType);
    }
    return (
        <>
            <div className="search__container">
                <div className="search__wrapper">
                    <div className="search">
                        <form
                            onSubmit={(e) => {
                                debugger;
                                e.preventDefault();
                                updateBookTypeToSearch(bookType)
                            }}
                        >
                            <input
                                className="search-bar__input"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookType}
                                placeholder="Search for books to add to your reading list and press Enter"
                                // onChange={e => updateBookType(e.target.value)}
                                onChange={onChange}
                            />
                            <button >
                                <FaSearch className="search-bar__submit"/>
                            </button>
                        </form>

                        {/* placeholder code */}
                        {/* {!bookType && (
                            <div className="empty">
                                <p>
                                    Try searching for a topic, for example
                                        <a onClick={() => {
                                        updateBookType("Javascript");
                                    }}
                                    >
                                        {" "}
                                            "Javascript"
                                        </a>
                                </p>
                            </div>
                        )} */}

                    </div>
                </div>
            </div>
            <div>
            {allAvailableBooks && <SearchResults {...ComponentProps}/>}
            </div>
            
            {/* {allAvailableBooks && (<div className="searchResults">
                <pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>
            </div> */}
            {/* )} */}
        </>
    );
};

export default BookSearch;
