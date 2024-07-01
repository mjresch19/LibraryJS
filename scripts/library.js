const myLibrary = [];

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
    myLibrary.push(book)
}

let book1 = new Book("Star Wars - Empire Strikes Back", "George Lucas", "400", true);
let book2 = new Book("Cat in the Hat", "Dr. Seuss", "40", false);

addBookToLibrary(book1);
addBookToLibrary(book2);