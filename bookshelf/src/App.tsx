import React, { useEffect } from "react";
import Book, { BookData } from "./components/Book";
import axios from "axios";

const API_URL = "http://localhost:3000/books";

async function getAPIData() {
  const response = await axios.get(API_URL);
  console.log(response)
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
