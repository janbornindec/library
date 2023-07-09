let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		console.log( title + " by " + author + ", " + pages + " pages, " + read);
		return title + " by " + author + ", " + pages + " pages, " + read;
	};
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function displayBook(myLibrary) {
	for (const book of myLibrary) {
		console.log(book.title);
	};
};

const book1 = new Book("Three Little Pigs","Janelle C","103","not read yet");
const book2 = new Book("Red Riding Hood","Robin K","83","read");

addBookToLibrary(book1);
addBookToLibrary(book2);

displayBook(myLibrary);