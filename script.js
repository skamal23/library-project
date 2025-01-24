const myLibrary = [];

function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author,title,pages,read){
    const book = new Book(author,title,pages,read);
    myLibrary.push(book);
}

function displayBooks(){
    bookcase = document.querySelector(".container");
    bookcase.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;
        const titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${book.title}`;
        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;
        const readElement = document.createElement("p");
        readElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        const close = document.createElement("div");
        close.className = "remove";
        close.appendChild(Object.assign(document.createElement("button"), { className: "closeButton", textContent: "X"}));
        bookDiv.appendChild(close);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(pagesElement);
        bookDiv.appendChild(readElement);
        bookcase.appendChild(bookDiv);
    });
}



//Button functionality
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

// Close the dialog when the "X" button is clicked
closeButton.addEventListener("click", () => {
    dialog.close();
});

//Form functionality
const form = document.querySelector("#bookForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const author = form.author.value;
    const title = form.title.value;
    const pages = form.pages.value;
    const read = form.read.checked;
    addBookToLibrary(author, title, pages, read);
    displayBooks();
    form.reset();
    dialog.close();
});
