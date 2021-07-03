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
//- Ok i wrote it much better

function addBookToLibraryLite(book) {
    myLibrary.push(book);
}

function displayBooks(library) {
    library.forEach((book, index)=> {
        let bookElem = document.createElement('div');
        bookElem.classList.add('book');
     
        let bookTitle = document.createElement('span');
        bookTitle.textContent = library[index].title;
        bookTitle.classList.add('bookTitle');
        bookElem.appendChild(bookTitle);
     
        let bookAuthor = document.createElement('span');
        bookAuthor.textContent = "By: " + library[index].author;
        bookTitle.classList.add('bookAuthor');
        bookElem.appendChild(bookAuthor);
     
        let bookPages = document.createElement('span');
         bookPages.textContent = "Pages: " + library[index].pages;
         bookTitle.classList.add('bookPages');
        bookElem.appendChild(bookPages);
     
        let bookDate = document.createElement('span');
        bookDate.textContent = "Published: " + library[index].date;
        bookTitle.classList.add('bookDate');
        bookElem.appendChild(bookDate);
     
        let bookRating = document.createElement('span');
        bookRating.textContent = "Rating: " + library[index].rating;
        bookTitle.classList.add('bookRating');
        bookElem.appendChild(bookRating);

        libraryContainer.appendChild(bookElem);
    });
}

function renderNewBookForm() {
    let formContainer = document.createElement('div');
    formContainer.id = "formContainer";
    document.body.appendChild(formContainer);

    let formTitle = document.createElement('div');
    formTitle.id = "formTitle";
    formTitle.textContent = "Add New Book";
    formContainer.appendChild(formTitle);
    formContainer.appendChild(createFormItem("Book Title*", "Title"));
    formContainer.appendChild(createFormItem("Book Author*", "Author"));
    formContainer.appendChild(createFormItem("Number of Pages*", "Pages"));
    formContainer.appendChild(createFormItem("Date Published*", "Year"));
    formContainer.appendChild(createFormItem("Rating*", "1 - 5"));
    formContainer.appendChild(createDropdownFormItem("Read Status*", "Have you read this book?"));
    

}

function createFormItem(title, subtitle) {
    let formItemContainer = document.createElement('div');
    formItemContainer.classList.add('formItemContainer');

    let formItemTitle = document.createElement('div');
    formItemTitle.textContent = title;
    formItemTitle.classList.add('formItemTitle');
    formItemContainer.appendChild(formItemTitle);

    let formItemInput = document.createElement('input');
    formItemInput.classList.add('formItemInput');
    formItemInput.placeholder = subtitle;
    formItemContainer.appendChild(formItemInput);
    return formItemContainer;
}

function createDropdownFormItem(title, subtitle) {
    let formDropdownItemContainer = document.createElement('div');
    formDropdownItemContainer.classList.add('formItemContainer');

    //Title
    let formItemTitle = document.createElement('div');
    formItemTitle.textContent = title;
    formItemTitle.classList.add('formItemTitle');
    formDropdownItemContainer.appendChild(formItemTitle);

    //Dropdown Div
    let formItemDropdown = document.createElement('div');
    formItemDropdown.classList.add('dropdown');

    //Select
    let dropdownSelect = document.createElement('select');
    dropdownSelect.placeholder = subtitle;

    //Placeholder Item
    let placeholderItem = document.createElement('option');
    placeholderItem.textContent = subtitle
    placeholderItem.disabled = true;
    placeholderItem.selected = true;
    dropdownSelect.appendChild(placeholderItem);
    
    //Item 1
    let dropdownItem1 = document.createElement('option');
    dropdownItem1.textContent = "I have already read this book.";
   
    dropdownSelect.appendChild(dropdownItem1);


    //Item 2
    let dropdownItem2 = document.createElement('option');
    dropdownItem2.textContent = "I haven't read this book.";
    dropdownSelect.appendChild(dropdownItem2);

    formItemDropdown.appendChild(dropdownSelect);


   
    formDropdownItemContainer.appendChild(formItemTitle);
    formDropdownItemContainer.appendChild(formItemDropdown);

    return formDropdownItemContainer;

}

const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click',(e)=> {
    renderNewBookForm();
});


const book1 = new Book("Star Wars", "George Lucas", "123", "1996", false, 3);



addBookToLibraryLite(book1);
addBookToLibraryLite(book1);
addBookToLibraryLite(book1);

displayBooks(myLibrary);





