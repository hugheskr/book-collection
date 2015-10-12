
function Book() {};
Book.prototype.makeBook = function(author, title) {
  this.author = author;
  this.title = title;
  return this.author + ', ' + this.title;
}
module.exports.Book = Book;
