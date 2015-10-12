var Book = require("./books");
function Shelf() {}

Shelf.prototype.makeShelf = function(shelf) {
  this.shelf = [];
  return this.shelf;
}
Shelf.prototype.addBook = function(book, shelf) {
  this.shelf = shelf;
  this.book = book;
  this.shelf.push(this.book);
}
Shelf.prototype.removeBook = function(book, shelf) {
  this.shelf = shelf;
  this.book = book;
  this.index = this.shelf.indexOf(this.book);
  this.shelf.splice(this.index, 1);
}
module.exports.Shelf = Shelf;
