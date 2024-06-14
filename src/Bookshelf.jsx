import React, { useState } from 'react'

const BookShelf = () => {
 
  const [newBook, setNewBook] = useState(
    { 
      title: '',
       author: '' 
    })

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])

  const handleInputChange = (e) => {
    setNewBook({...newBook, [e.target.id] : e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks((Books) => [...Books, newBook])
    setNewBook({ title: '', author: '' }) 
  }

  return (
    <div className='bookshelfDiv'>
      <div className='formDiv'>
      <h3>Bookshelf</h3>
      <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={newBook.title} onChange={handleInputChange} />

          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={newBook.author} onChange={handleInputChange} />

          <button type="submit">Add Book</button>
      </form>
      </div>
      
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className='bookCard' key={index} >
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
        </div>
      
    </div>
  )
}

export default BookShelf

