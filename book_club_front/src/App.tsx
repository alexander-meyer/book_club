import React, { useEffect } from 'react';
import './App.css';
import axios from "axios";
import Book, { BookData } from './components/Book';

// TODO: where should this variable live? probably not here
const API_URL = 'http://localhost:3000/books'

async function getAPIData() {
  const response = await axios.get(API_URL);
  // TODO: rather than assertion, how can we incorporate type validation here?
  return response.data as BookData[];
}

function App() {
  const [books, setBooks] = React.useState<BookData[]>([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setBooks(items)
      }
    });
    return () => { mounted = false }
  }, [])

  return (
    <div className="App">
      <h1>What's on your Shelf?</h1>
      <hr />
      <Book props={books} />
    </div>
  );
}

export default App;
