//show book form on click
const showFormBtn = document.querySelector('.showFormBtn');
const formContainer = document.querySelector(".formContainer");
function showFormBtnListener() {
	showFormBtn.addEventListener('click', (e) => {
		formContainer.style.display = "block";
	});
}

//close book form on click
const closeFormBtn = document.querySelector('.closeFormBtn');
function closeFormBtnListener() {
	closeFormBtn.addEventListener('click', (e) => {
		formContainer.style.display = "none";
	});
}

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

function addBookToLibrary(event) {
	event.preventDefault();
	const newBook = getBookFromInput();
	myLibrary.push(newBook);
	formContainer.style.display = "none";
	displayCard();
};

function displayCard() {
	for (const book of myLibrary) {
		createCard(book);
	};
};

const cardContainer = document.querySelector('.cardContainer');

function createCard(book) {
	const card = document.createElement('div');
	const title = document.createElement('p');
	const author = document.createElement('p');
	const page = document.createElement('p');
	const buttonGroup = document.createElement('div');
	const statusBtn = document.createElement('button');
	const removeBtn = document.createElement('button');

	card.classList.add('card');
	buttonGroup.classList.add('buttonGroup');
	statusBtn.classList.add('btn');
	removeBtn.classList.add('btn');

	title.textContent = `${book.title}`;
	author.textContent = `${book.author}`;
	page.textContent = `${book.page}`;
	removeBtn.textContent = 'Remove';

	if (book.isRead) {
		statusBtn.style.backgroundColor = 'green';
		statusBtn.textContent = 'Read';
	} else {
		statusBtn.style.backgroundColor = 'red';
		statusBtn.textContent = 'Unread';
	}

	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(page);
	card.appendChild(buttonGroup);
	buttonGroup.appendChild(statusBtn);
	buttonGroup.appendChild(removeBtn);
	cardContainer.appendChild(card);
};
