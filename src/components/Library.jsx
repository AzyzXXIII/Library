import React, { useEffect, useState } from "react";

export const Library = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/books");
        const json = await response.json();
        setBooks(json);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Library</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} style={{ paddingBottom: "25px" }}>
            <div>{book.name}</div>
            <div>{book.author}</div>
            <div>{book.year_published}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
