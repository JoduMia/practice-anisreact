import React from 'react'
import { useReducer, useState } from 'react'

const bookLists = [
    {id: 1, name: 'Hamilioner Bashiwala'},
    {id: 2, name: 'Padma Nodir Majhi'}
]
const UseReducer = () => {
    const [bookName, setBookName] = useState('');

    const reducer = (state, action) => {
        if(action.type === 'ADD'){
            const allBooks = [...state.books, action.payload]
            return {
                ...state,
                books: allBooks,
                isModalShow: true,
                modalText: `Book is added successfully`,
            }
        }
        if(action.type === 'REMOVE'){
            const filteredBook = state.books.filter(book => {
               return book.id !== action.payload;
            })
            return {
                ...state,
                books: filteredBook,
                isModalShow: true,
                modalText: `Book is removed successfully`,
            }

        }


    };

    const [bookState, dispatch] = useReducer(reducer, {
        books: bookLists,
        isModalShow: false,
        modalText: '',
    });


    // const [books, setBooks] = useState(bookLists);
    // const [modalText, setModalText] = useState('');
    // const [isModalShow, setIsModalShow] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName};
        dispatch({type: 'ADD', payload: newBook});
        // const newBook = {id: new Date().getTime().toString(), name: bookName}
        // setBooks(prevstate => {
        //     return [...prevstate, newBook]
        // });
        // setBookName('');
        // setIsModalShow(true);
        // setModalText(`${bookName} is added successfully.`);
        // setTimeout(() => {
        //     setIsModalShow(false)
        // }, 2000);
        setBookName('');
    };


    const removeBook = (id) => {
        dispatch({type: 'REMOVE', payload: id});
    };
  return (
    <div>
        <h1>Books Lists</h1>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="books">Books: </label>
                <input type="text" required={true} name='books' value={bookName} onChange={(e) => setBookName(e.target.value)} />
            <button type='submit'>Submit</button>
            </div>
        </form>

        {bookState.isModalShow && (
            <p>{bookState.modalText}</p>
        )}

        {
            bookState.books.map(book => {
                const {name, id} = book;
                return <li key={id}>
                    {name}
                    <button onClick={()=> {removeBook(id)}}>X</button>
                    </li>
            })
        }
    </div>
  )
}

export default UseReducer