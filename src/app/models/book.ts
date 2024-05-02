export interface Books {
  idBook: string,
  bookName: string,
  pages: string,
  author: string,
  genre: string
}

export interface Book {
  idBook: string,
  bookName: string,
  isbn: number,
  pages: string,
  author: {
    idAuthor: string,
    authorName: string,
  },
  genre: {
    idGenre: string,
    genreName: string
  }
}

export interface CreateBook {
  bookName: string,
  pages: string,
  author: {
    idAuthor: string,
    authorName: string,
  },
  genre: {
    idGenre: string,
    genreName: string
  }
}
