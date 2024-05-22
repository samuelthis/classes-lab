// ### Task:
// Create a Book class with the following specifications:

// ### Properties (Instance Variables):

// #### title: the title of the book.
// #### author: the name of the author.
// #### year: the year the book was published.
// #### borrowed: a boolean that indicates whether the book is borrowed or not (default should be false).

// ### Constructor:
// Your constructor should take the title, author, and year as parameters and initialize the respective properties.
// The borrowed property should be initialized to false.

// ### Instance Methods:
// #### borrow(): This method should change the borrowed status to true.
// #### returnBook(): This method should set the borrowed status to false.
// #### isBorrowed(): This method should return the current borrowed status.
// #### getInfo(): This method should return a string containing information about the book 
// (e.g., "Title: 1984, Author: George Orwell, Year: 1949, Borrowed: No").

class Book {
    constructor(title, author, year, borrowed=false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.borrowed = borrowed;
    }
   borrow() {
    this.borrowed = true;
    console.log(`status : ${this.borrowed}`);
   }
   returnBook() {
    this.borrowed = false;
    console.log(`status : ${this.borrowed}`);
   }
   isBorrowed(){
    return this.returnBook();
   }
   getInfo(){
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Borrowed: ${this.borrowed}`)
   }
}
const book4 = new Book('All of Us', 'Sam Sam', '2023', true);
const book3 = new Book();
const book1 = new Book();
const book2 = new Book(); 
book3.isBorrowed();
book4.getInfo();
// book2.returnBook();
// book1.borrow();


