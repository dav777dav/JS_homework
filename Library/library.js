class Book {
    constructor (title, author, year) {
        this.title = title;

        this.author = author;

        this.year = year;
        
        this.isAvailable = true;
    }

    getInfo () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    borrowBook () {
        if (this.isAvailable) this.isAvailable = false;

        return "The book is already unavailable";
    }

    returnBook () {
        if (this.borrowBook) this.isAvailable = true;

        return "The book is already available";
    }

    matchesAuthor (authorName) {
        if(this.author.toLowerCase() === authorName.toLowerCase()) return true;

        return false;
    }

    matchesTitle (word) {
        if(this.title.includes(word)) return true;

        return false;
    }

}



class Library {
    constructor () {
        this.books = [];
    }

    addBook (book) {
        this.books.push(book);
    }

    removeBook (title) {
        let i = this.books.findIndex(books1 => books1.title === title);

        if (i === -1) console.log("The book wasn't found");

        this.books.splice(i, 1);
    }

    findBookByTitle (title) {
        let findBook = this.books.find(book1 => book1.title === title);

        if (findBook) return findBook;

        return null;
    }

    findBooksByAuthor (authorName) {
        return this.books.filter(book => book.matchesAuthor(authorName));
    }

    getAvailableBooks () {
        return this.books.filter(book => book.isAvailable);
    }

    borrowBook (title) {
        let book = this.findBookByTitle(title);

        if (book) book.borrowBook();

        return "The book isn't found";
    }

    returnBook(title) {
        let book = this.findBookByTitle(title);

        if (book) book.returnBook();

        return "The book is't found";
    }

    showAllBooks() {
        this.books.forEach(book => console.log(book.getInfo()));
    }

    countBooks() {
        return this.books.length;
    }

    countAvailableBooks() {
        return this.getAvailableBooks().length;
    }

    searchBooks(word) {
        return this.books.filter(book => book.matchesTitle(word));
    }

    getOldestBook() {
        if (this.books.length === 0) return null;

        let old = this.books[0];

        for (let i = 1; i < this.books.length; i += 1) {
            if (this.books[i].year < old.year) {
                old = this.books[i];
            }
        }

        return old;
    }
}



const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");
console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
