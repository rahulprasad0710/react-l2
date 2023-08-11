import React from "react";
import BOOK_LIST from "../../constants/BOOK_LIST";

const BookList = () => {
    console.log("BOOK_LIST", BOOK_LIST);
    return (
        <div className='row'>
            {BOOK_LIST.map((book) => {
                return (
                    <div key={book.id} className='col-4'>
                        <div className='m-3'>
                            <h3> {book.name}</h3>
                            {book.genres.map((oneGenre) => {
                                return (
                                    <h4 key={oneGenre.id}>
                                        genre :-{oneGenre.name}
                                    </h4>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BookList;
