import { FC, FormEvent, useState } from 'react';
import { randomID } from '../../utils/randomID';
import { Book } from '../../interfaces/Book.interface';
import './AddBookForm.css';
import { useAppDispatch } from '../../utils/redux';
import { addBook } from '../../redux/booksRedux';



const AddBookForm: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const book: Book = {
            id: randomID(10),
            title,
            author,
            price
          }
        console.log(book);
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
        setPrice(0);
    }
  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      Title: <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
      Author: <input value={author} onChange={e => setAuthor(e.target.value)} type="text" />
      Price: <input value={price} onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add book</button>
    </form>
  );
};

export default AddBookForm;