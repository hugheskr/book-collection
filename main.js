var book = require("./books");
var shelf = require("./shelves");

function Library(shelf) {
  this.shelf = shelf;
  this.libraryContents = [];
}
Library.prototype.addShelf = function(shelf) {
  this.shelf = shelf;
  this.libraryContents.push(this.shelf);
}
Library.prototype.removeShelf = function(shelf) {
  this.shelf = shelf;
  this.index = this.libraryContents.indexOf(this.shelf);
  this.libraryContents.splice(this.index, 1);
}

var library = new Library();

var bk = new book.Book();
var sh = new shelf.Shelf();

var theSimpsons = bk.makeBook("Simson,Homer", "The Simsons");
var spiderman = bk.makeBook("Lee,Stan", "Spiderman");
var historyOfBooks = bk.makeBook("Dickens, Chuck", "History of Books");
var chemistryBook = bk.makeBook("Bob, Bill", "Chemistry");
console.log(theSimpsons +" 1 make The Simpsons book");
console.log(spiderman +" 1.5 make Spiderman book");
console.log(historyOfBooks +" 2 make the History of Books");
console.log(chemistryBook +" 2.5 make Chemistry book");

var fictionShelf = sh.makeShelf(fictionShelf);
var nonFictionShelf = sh.makeShelf(nonFictionShelf);
console.log(fictionShelf +" 3 make empty fiction shelf");
console.log(nonFictionShelf +" 4 make empty nonFictionShelf");


sh.addBook(theSimpsons, fictionShelf);
console.log(fictionShelf + " 5 add The Simpsons book to ficitonShelf");
sh.addBook(spiderman, fictionShelf);
console.log(fictionShelf + " 5.5 add spiderman book to ficitonShelf");
sh.addBook(historyOfBooks, nonFictionShelf);
console.log(nonFictionShelf + " 6 add the History of Books to nonFictionShelf");
sh.addBook(chemistryBook, nonFictionShelf);
console.log(nonFictionShelf + " 6.5 add the Chemistry book to nonFictionShelf");

sh.removeBook(historyOfBooks, nonFictionShelf);
console.log(nonFictionShelf + " 7 removed History of Books");

library.addShelf(fictionShelf);
console.log(library.libraryContents + " 8 add fictionShelf to bookCaseContents");
library.addShelf(nonFictionShelf);
console.log(library.libraryContents + " 9 add nonFictionShelf to bookCaseContents");
library.removeShelf(nonFictionShelf);
console.log(library.libraryContents + " 10 remove nonFictionShelf from bookCaseContents");
