
const dialog = document.getElementById("bookDialog");
// getting book from dialog 
document.getElementById("addBook").addEventListener("click"
    , () => {
        dialog.showModal();

    }

);
//to take input from the forms 

const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const book = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    console.log(book);
    creatediv(book, author, pages);

    dialog.close();

}
);
//to close the dialog 
const close = document.getElementById("closeBtn");
document.getElementById("closeBtn").addEventListener("click", () => {
    dialog.close();
}
);
//to create a new div and print it there

function creatediv(book, author, pages) {
    const newdiv = document.createElement("div");
    newdiv.innerHTML = `
    <h3>Book Name: ${book} </h3> 
    <p>Author : ${author}</p>
    <p> Number of pages: ${pages}<p/>
    `;
    const container = document.querySelector(".cards");
    container.appendChild(newdiv);

    newdiv.classList.add("card");

}

// api

window.addEventListener("load", () => {
    loadBooks();
});

function loadBooks() {
    const storedBooks = localStorage.getItem("books");

    if (storedBooks) {
        console.log("Loading from localStorage");
    }
    const books = JSON.parse(storedBooks);
    fetch("https://openlibrary.org/search.json?q=fiction")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("books", JSON.stringify(data.docs));
            console.log(data.docs);

            for (let i = 0; i < 10; i++) {
                const book = data.docs[i];
                const imageUrl = book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "placeholder.jpg"; // Optional fallback image
                printdefault(
                    book.title,
                    book.author_name ? book.author_name.join(", ") : "Unknown",
                    "N/A", imageUrl
                );
            }
        })
        .catch(error => console.error("Error:", error));
}

function printdefault(book, author, pages, imageUrl) {
    const newdiv = document.createElement("div");
    newdiv.innerHTML = `
    <h3>Book Name: ${book} </h3> 
    <p>Author : ${author}</p>
    <p> Number of pages: ${pages}<p/>
    <img src="${imageUrl}" alt="${book}">
    `;
    const container = document.querySelector(".defaultbook");
    container.appendChild(newdiv);

    newdiv.classList.add("defaultbook");


}





























//or delete all books
// const clearBtn = document.querySelector("#clear");
// clearBtn.addEventListener("click", () => {
//     bookarr.length = 0;
//     container.innerHTML = "";
// })


