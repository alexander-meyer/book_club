import React, { useEffect } from "react";
import Book, { BookData } from "./components/Book";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;
const API_URL = new URL("/books", BASE_API_URL).toString();

async function getAPIData() {
  const response = await axios.get(API_URL);
  // TODO: rather than asserting, how can we properly validate the response type?
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
      <h1>Welcome to your Shelf!</h1>
      <hr/>
      <Book books={books} />
    </div>
  )
}

export default App
