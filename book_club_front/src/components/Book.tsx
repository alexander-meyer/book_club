import React from 'react'

export type BookData = {
  title: string;
  author: string;
  rating: number;
  description: string;
}

function Book(props: { props: BookData[] }) {
  return (
    <div>
      {props.props.map((book, index) => (
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

export default Book
