import axios from "axios";
import React, { useEffect } from "react";
import { BookData } from "./types";
import Books from "./components/Books/Books";

const BASE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_URL = new URL("/books", BASE_API_URL).toString();

async function getAPIData() {
  const response = await axios.get(API_URL);
  // TODO: rather than asserting, how can we properly validate the response type?
  return response.data as BookData[];
}

export default function Library() {
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
    books.length === 0
      ? <p>No books yet...</p>
      : <Books books={books} />
  )
}
