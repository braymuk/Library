let myLibrary = [];

function Book(title, author, pages, date, isRead, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.isRead = isRead;
    this.rating = rating;
}


//Adds book to the library array
//  but should this also handle the DOM?
const libraryContainer = document.querySelector('#libraryContainer');


//This could probably be written much better
function addBookToLibrary(book) {
    //Pushes book data to library array
    myLibrary.push(book);
    
   let bookElem = document.createElement('div');
   bookElem.classList.add('book');

   let bookTitle = document.createElement('span');
   bookTitle.textContent = book.title;
   bookTitle.classList.add('bookTitle');
   bookElem.appendChild(bookTitle);

   let bookAuthor = document.createElement('span');
   bookAuthor.textContent = "By: " + book.author;
   bookTitle.classList.add('bookAuthor');
   bookElem.appendChild(bookAuthor);

   let bookPages = document.createElement('span');
    bookPages.textContent = "Pages: " + book.pages;
    bookTitle.classList.add('bookPages');
   bookElem.appendChild(bookPages);

   let bookDate = document.createElement('span');
   bookDate.textContent = "Published: " + book.date;
   bookTitle.classList.add('bookDate');
   bookElem.appendChild(bookDate);

   let bookRating = document.createElement('span');
   bookRating.textContent = "Rating: " + book.rating;
   bookTitle.classList.add('bookRating');
   bookElem.appendChild(bookRating);

    libraryContainer.appendChild(bookElem);
}

const book1 = new Book("Star Wars", "George Lucas", "123", "1996", false, 3);


addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);





