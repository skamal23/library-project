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

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

function displayBooks() {
    const bookcase = document.querySelector(".container");
    bookcase.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

    
        const authorP = document.createElement("p");
        authorP.textContent = `Author: ${book.author}`;
        const titleP = document.createElement("p");
        titleP.textContent = `Title: ${book.title}`;
        const pagesP = document.createElement("p");
        pagesP.textContent = `Pages: ${book.pages}`;
        const readP = document.createElement("p");
        readP.textContent = `Read: ${book.read ? "Yes" : "No"}`;

        bookDiv.appendChild(authorP);
        bookDiv.appendChild(titleP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(readP);

        const close = document.createElement("div");
        close.className = "close";
        
        const removeButton = document.createElement("button");
        removeButton.className = "closeButton";
        removeButton.textContent = "X";
        removeButton.setAttribute("data-index", index);
        if(book.read){
            bookDiv.style.backgroundColor = "#CDFFCD";
            removeButton.style.backgroundColor = "#CDFFCD"; 
        }
        else{
            bookDiv.style.backgroundColor = "#FFC6C4";
            removeButton.style.backgroundColor = "#FFC6C4"; 
        }
        
        
        close.appendChild(removeButton);
        bookDiv.appendChild(close);   
        bookcase.appendChild(bookDiv);
        removeButton.addEventListener("click", () => {
            removeBookFromLibrary(index);
            displayBooks(); 
        });
    });
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

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
