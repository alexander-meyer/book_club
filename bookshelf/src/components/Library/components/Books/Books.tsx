import { BookData } from "../types"

function Books(props: { books: BookData[] }) {
  return (
    <div>
      {props.books.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>rating: {book.rating} / 5</p>
          <p><i>{book.description}</i></p>
          <hr />
          </div>
      ))}
    </div>
  )
}

export default Books
