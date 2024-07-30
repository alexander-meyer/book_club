import axios from "axios";
import { useState } from "react";
import { Volume } from "./types";
import "./GoogleBooksDashboard.css";

const BASE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_URL = new URL("/external_books", BASE_API_URL).toString();

export default function GoogleBooksDashboard() {
  const [books, setBooks] = useState<Volume[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function loadAPIData(search_query: string) {
    const response = await axios.get(API_URL, {
      params: {
        q: search_query
      }
    });
    // TODO: rather than asserting, how can we properly validate the response type?
    const volumes = response.data as Volume[];
    setBooks(volumes);
  }

  return (
    <>
      <div>
        <h1>Google Books</h1>
        <input
          type="text"
          placeholder="Enter book title"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => { loadAPIData(searchTerm) }}>Search</button>
      </div>
      <div className="book-data">
        {books && books.map(book => {
          return (
            <div key={book.id}>
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors.join(", ")}</p>
              <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="No image available" />
            </div>
          )
        })}
      </div>
    </>
  )
}
