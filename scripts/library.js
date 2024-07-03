//A library array to hold our books
const myLibrary = [];

//Card Container
let cardContainer = document.getElementById("card-container");

//Form Element
let bookForm = document.getElementById("book-form");

//Constructor for a book
function Book(title,author,pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {

        if (this.read) {
            return this.title + " by " + this.author + ", " + this.pages + " pages, read." 
        }

        else {
            return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet."
        }
    }

}

//Function to pushing to the library array
function addBookToLibrary() {

    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    const statusChecked = bookForm.querySelector('input[name=read]:checked').value;

    let book;

    if (statusChecked === "yes") {
        book = new Book(bookTitle, bookAuthor, bookPages, true);
    }
    else {
        book = new Book(bookTitle, bookAuthor, bookPages, false);
    }

    myLibrary.push(book);
}

//Function to display books
function displayBooks() {

    //Clear to prevent stacking of duplicates
    cardContainer.innerHTML = "";


    //iterate through the obj array
    myLibrary.forEach((book, i) => {

        let newCard = document.createElement("div");
        newCard.className = "card";

        let bookTitle = document.createElement("p");
        bookTitle.className = "card-text-content";
        bookTitle.textContent = book.title;

        let bookAuthor = document.createElement("p");
        bookAuthor.className = "card-text-content";
        bookAuthor.textContent = book.author;

        let bookPages = document.createElement("p");
        bookPages.className = "card-text-content";
        bookPages.textContent = book.pages;
        
        let readStatus = document.createElement("p");
        readStatus.className = "card-text-content";
        readStatus.textContent = "Read: " + book.read;

        let removeButton = document.createElement("button");
        removeButton.className = "card-remove-button";
        removeButton.textContent = "Remove";

        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        newCard.appendChild(readStatus);
        newCard.appendChild(removeButton);

        cardContainer.appendChild(newCard);

    });
}

//function to display the form
function showForm() {
    bookForm.className = "book-form-show";
}


//function to hide the form
function hideForm() {
    bookForm.className = "book-form-hide"
}

//event listener to respond to submission of new form
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
})

