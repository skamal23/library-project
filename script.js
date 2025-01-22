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

function displayBook(book){

}

//Button functionality
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");
showButton.addEventListener("click",()=>{
    dialog.showModal();
});
closeButton.addEventListener("click",()=>{
    dialog.close();
});