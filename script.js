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

//target container in html
const container = document.querySelector('.container');

function displayBook(myLibrary) {
	for (const book of myLibrary) {
		//create a card for each book
		const card = document.createElement('div');
		for (let details in book) {
			card.textContent = book.info();
		}
		//add the card inside the container
		container.appendChild(card);
	};
};

// Testing display book func 

const book1 = new Book("Three Little Pigs","Janelle C","103","not read yet");
const book2 = new Book("Red Riding Hood","Robin K","83","read");
const book3 = new Book("Silly Beans","Benjamin J","183","read");


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


displayBook(myLibrary);
