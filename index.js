//bookshelf
const bookarr = [];

//constructor function for book objects

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function to add book to bookshelf
function addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    bookarr.push(book);
    console.log(bookarr);
}
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBook("To Kill a Mockingbird", "Harper Lee", 281, false);
addBook("jw", "jake", 789, true);

//for display

const container = document.querySelector(".cards");

for (let i = 0; i < bookarr.length; i++) {
    container.innerHTML += `
    <div class="card">
        <h2>${bookarr[i].title}</h2>
        <p>${bookarr[i].author}</p>
        <p>${bookarr[i].pages} pages</p>
        <p>${bookarr[i].read ? "Read" : "Not Read"}</p>
    </div>`;
}

//taking book from the user 
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titile = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    addBook(titile, author, pages, read);
    container.innerHTML += `
    <div class="card">
        <h2>${titile}</h2>
        <p>${author}</p>
        <p>${pages} pages</p>
        <p>${read ? "Read" : "Not Read"}</p>
    </div>`;

});
