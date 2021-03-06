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
    while(libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild);
    }
    library.forEach((book, index)=> {
        let bookElem = document.createElement('div');
        bookElem.dataset.id = index;
        bookElem.classList.add('book');

        let bookId = bookElem.dataset.id;

        

      

        let bookDeleteButton = document.createElement('div');
        bookDeleteButton.id = "bookDeleteButton";
        bookDeleteButton.classList.add('exitButton');
        bookDeleteButton.addEventListener('click', ()=> {
            
            myLibrary.splice(bookId, 1);
            bookElem.remove();
        });
        bookElem.appendChild(bookDeleteButton);
     
        let bookTitle = document.createElement('span');
        bookTitle.textContent = book.title;
        bookTitle.classList.add('bookTitle');
        bookElem.appendChild(bookTitle);
     
        let bookAuthor = document.createElement('span');
        bookAuthor.textContent = "By: " + book.author;
        bookAuthor.classList.add('bookAuthor');
        bookElem.appendChild(bookAuthor);
     
        let bookPages = document.createElement('span');
        bookPages.textContent = "Pages: " + book.pages;
        bookPages.classList.add('bookPages');
        bookElem.appendChild(bookPages);
     
        let bookDate = document.createElement('span');
        bookDate.textContent = "Published: " + book.date;
        bookDate.classList.add('bookDate');
        bookElem.appendChild(bookDate);
     
        let bookRating = document.createElement('span');
        bookRating.textContent = "Rating: " + book.rating;
        bookRating.classList.add('bookRating');
        bookElem.appendChild(bookRating);

        let isReadToggle = document.createElement('label');
        isReadToggle.id = "isReadToggle";
        isReadToggle.classList.add('switch');
        

        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.addEventListener('click', ()=> {
            let switchStatus = checkBox.checked;
            console.log(checkBox.value);
            if(checkBox.value === "on") {
                bookElem.classList.add('bookRead');
                myLibrary[bookId].isRead = true;
                checkBox.value = "off";
                checkBox.checked = true;
                
            } else {
                bookElem.classList.remove('bookRead');
                myLibrary[bookId].isRead = false;
                checkBox.value = "on";
                checkBox.checked = false;
            }
        });
        isReadToggle.appendChild(checkBox);

        if(myLibrary[bookId].isRead === true) {
            bookElem.classList.add('bookRead');
            checkBox.value = "off";
            checkBox.checked = true;
        }

        let sliderRound = document.createElement('span');
        sliderRound.classList.add('slider');
        sliderRound.classList.add('round');
        isReadToggle.appendChild(sliderRound);

        bookElem.appendChild(isReadToggle);

        libraryContainer.appendChild(bookElem);
    });
}

function removeForm() {
    formContainer.remove();
    blurBackground.remove();
    blackBackground.remove();
}


function renderNewBookForm() {
    //Making Blur Background
    let blurBackground = document.createElement('div');
    blurBackground.id = "blurBackground";
    document.body.appendChild(blurBackground);

    //Darken the blur
    let blackBackground = document.createElement('div');
    blackBackground.id = "blackBackground";
    document.body.appendChild(blackBackground);

    //Form here
    let formContainer = document.createElement('div');
    formContainer.id = "formContainer";
    document.body.appendChild(formContainer);

    let formExitButton = document.createElement('div');
    formExitButton.classList.add('exitButton');
    formExitButton.addEventListener('click', ()=> {
        removeForm();
    });
    formContainer.appendChild(formExitButton);

    let formTitle = document.createElement('div');
    formTitle.id = "formTitle";
    formTitle.textContent = "Add New Book";
    formContainer.appendChild(formTitle);
    //Form items
    formContainer.appendChild(createFormItem("Book Title*", "Title"));
    formContainer.appendChild(createFormItem("Book Author*", "Author"));
    formContainer.appendChild(createFormItem("Number of Pages*", "Pages"));
    formContainer.appendChild(createFormItem("Date Published*", "Year"));
    formContainer.appendChild(createDropdownFormItem("Read Status*", "Have you read this book?"));
    formContainer.appendChild(createFormItem("Rating*", "1 - 5"));
   

    const formItemInputs = document.querySelectorAll('.formItemInput');

    console.log(formItemInputs);

    let buttonContainer = document.createElement('div');
    buttonContainer.id = "buttonContainer";
    formContainer.appendChild(buttonContainer);

    let addButton = document.createElement('button');
    addButton.textContent = "Add Book";
    addButton.addEventListener('click', ()=> {

        let emptyFlag = false;
        formItemInputs.forEach((item)=> {
            if(item.value === "") {
                emptyFlag = true;
                console.log("flag");
                }
        });
      
        if(!emptyFlag) {
            let isReadStatus = document.querySelector('.dropdown').firstChild.value === "I have already read this book."? true: false;
            console.log(" Rawe " + isReadStatus);
            let book = new Book(formItemInputs[0].value, formItemInputs[1].value, formItemInputs[2].value, formItemInputs[3].value,isReadStatus,formItemInputs[4].value);
            addBookToLibraryLite(book);
            displayBooks(myLibrary);
    
            //Delete form 
            removeForm();
        } else {
            window.alert("Please fill every input. :)");
            emptyFlag = false;
        }
        
    });
    buttonContainer.appendChild(addButton);


    let clearFieldsButton = document.createElement('button');
    clearFieldsButton.textContent = "Clear Fields";
    clearFieldsButton.addEventListener('click', ()=> {
        formItemInputs.forEach((item)=> {
            item.value = '';
        });
    });
    buttonContainer.appendChild(clearFieldsButton);
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


const exampleBook1 = new Book("Letters from a Stoic", "Seneca", "254", "65 AD", true, 5);
const exampleBook2 = new Book("Atomic Habits", "James Clear", "306", "2018", true, 4);
const exampleBook3 = new Book("Deep Work", "Cal Newport", "256", "2016", false, 5);




addBookToLibraryLite(exampleBook1);
addBookToLibraryLite(exampleBook2);
addBookToLibraryLite(exampleBook3);

displayBooks(myLibrary);





