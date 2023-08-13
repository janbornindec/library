//show book form on click
const showFormBtn = document.querySelector('.showFormBtn');
const formContainer = document.querySelector(".formContainer");
const addBookForm = document.querySelector(".addBookForm");

function showFormBtnListener() {
	showFormBtn.addEventListener('click', (e) => {
		formContainer.style.display = "block";
		//clear previous entries in form
		addBookForm.reset();
	});
};

//close book form on click
const closeFormBtn = document.querySelector('.closeFormBtn');
function closeFormBtnListener() {
	closeFormBtn.addEventListener('click', () => {
		addBookForm.reset();
		formContainer.style.display = "none";
	});
};

window.addEventListener("keydown", function(event) {
	if (event.key === 'Escape') {
		addBookForm.reset();
		formContainer.style.display = "none";
	};
});

showFormBtnListener();
closeFormBtnListener();

//book object
let myLibrary = [];

function Book(title,author,pages,isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
};

//get the new book from user's inputs
function getBookFromInput() {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const page = document.getElementById("page").value;
	const isRead = document.getElementById("status").checked;
	return new Book(title,author,page,isRead);
};

//add book to library on click
const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", addBookToLibrary);

addBookForm.addEventListener("keypress", function(event) {
	if (event.key === 'Enter') {
		addBookToLibrary(event);
	};
})

//search if there's an existing book's title & author in library
const searchTitle = bookTitle => myLibrary.find(existingBook => existingBook.title.toLowerCase() === bookTitle.toLowerCase());
const searchAuthor = bookAuthor => myLibrary.find(existingBook => existingBook.author.toLowerCase() === bookAuthor.toLowerCase());
const searchPages = bookPages => myLibrary.find(existingBook => existingBook.pages === bookPages);

function addBookToLibrary(event) {
	event.preventDefault();
	const newBook = getBookFromInput();
	const titleInLibrary = searchTitle(newBook.title);
	const authorInLibrary = searchAuthor(newBook.author);
	const pagesInLibrary = searchPages(newBook.pages);

	//if title & author match with existing book in library, do nothing
	if (titleInLibrary && authorInLibrary && pagesInLibrary) {
		alert("This book already exists.");
	} else if ((title.value === '') || (author.value === '') || (page.value === '')) {
		alert("Please fill in all fields.")
	} else {
		myLibrary.push(newBook);
		formContainer.style.display = "none";
		displayCards();
	};
};

const cardContainer = document.querySelector('.cardContainer');

function createCard(book) {
	const card = document.createElement('div');
	const title = document.createElement('p');
	const author = document.createElement('p');
	const pages = document.createElement('p');
	const buttonGroup = document.createElement('div');
	const statusBtn = document.createElement('button');
	const removeBtn = document.createElement('button');

	card.classList.add('card');
	buttonGroup.classList.add('buttonGroup');
	statusBtn.classList.add('btn');
	statusBtn.classList.add('cardStatusBtn');
	removeBtn.classList.add('btn');
	removeBtn.classList.add('remove');

	title.textContent = `${book.title}`;
	author.textContent = `${book.author}`;
	pages.textContent = `${book.pages}`;
	removeBtn.textContent = 'Remove';

	if (book.isRead) {
		statusBtn.style.backgroundColor = 'rgb(155, 255, 182)';
		statusBtn.textContent = 'Read';
	} else {
		statusBtn.style.backgroundColor = 'rgb(230, 86, 86)';
		statusBtn.textContent = 'Unread';
	}

	statusBtn.addEventListener('click',() => {
		book.isRead = !book.isRead;
		displayCards();
	});

	removeBtn.addEventListener('click',() => {
		removeBookFromLibrary(book);
	})

	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(pages);
	card.appendChild(buttonGroup);
	buttonGroup.appendChild(statusBtn);
	buttonGroup.appendChild(removeBtn);
	cardContainer.appendChild(card);
};

//remove book from library on click
function removeBookFromLibrary(book) {
	myLibrary.pop(book);
	displayCards();
}

//display and refresh cards
function displayCards() {
	const cards = document.querySelectorAll('.card');
    cards.forEach(card => cardContainer.removeChild(card));
    for (let i=0; i<myLibrary.length; i++){
        createCard(myLibrary[i]);
    };
}
