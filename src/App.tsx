import { FC } from "react";
import BooksList from "./components/BooksList/BooksList";
import AddBookForm from './components/AddBookForm/AddBookForm';



const App: FC = () => {


  return (
    <div className="container">
      <header>
         <h1>Books App</h1>
      </header>
      <BooksList />
      <AddBookForm />
    </div>
  );
}

export default App;