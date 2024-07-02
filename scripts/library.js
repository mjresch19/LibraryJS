const myLibrary = [];
let cardContainer = document.getElementById("card-container");
console.log(cardContainer);
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
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Function to display books
function displayBooks() {

    //for loop that iterates through the obj array
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

        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        newCard.appendChild(readStatus);

        cardContainer.appendChild(newCard);

    });
}



let book1 = new Book("Star Wars - Empire Strikes Back", "George Lucas", "400", true);
let book2 = new Book("Cat in the Hat", "Dr. Seuss", "40", false);

addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks();

console.log(myLibrary);