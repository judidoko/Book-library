// Variables Declaration
let newBookbtn = document.querySelector(".new-book-btn");
let formSubmit = document.querySelector(".new-book-form");
let modal = document.querySelector(".myModal");
let addBook = document.querySelector(".add-book");
let closeBtn = document.getElementsByClassName("close")[0];

// Event Listeners
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector(".new-book-form");
  newBookForm.style.display = "block";
  modal.style.display = "block";
});

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  showLibrary();
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showLibrary();
}

function showLibrary() {
  let libBook = document.querySelector(".libraryBooks");
  libBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let showBookTag = document.createElement("div");
    showBookTag.setAttribute("class", "book-card");
    showBookTag.innerHTML = `
    <div class="book-header">
        <h3 class="title">${book.title} Book</h3>
        <h5 class="author"> by ${book.author}</h5> 
    </div>
    <div class="book-body"> 
        <p>${book.pages} Pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        <button class="remove-book-btn" onclick="removeBook(${i})">Remove</button>
        
    </div>
    `;
    libBook.appendChild(showBookTag);
  }
}

// close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

addBook.onclick = function () {
  modal.style.display = "none";
};

// To remove
function removeBook(index) {
  myLibrary.splice(index, 1);
  showLibrary();
}
