import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import './BookItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    book: Book;
    removeBook: (id: string) => void;
}

const BookItem: FC<Props> = ({ book, removeBook }) => {
    const handleRemove = () => {
        removeBook(book.id);
    };

    return (
        <li className='book-item'>
            {book.title} by {book.author}, ${book.price} 
            <button onClick={handleRemove} className="remove-button">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
};

export default BookItem;