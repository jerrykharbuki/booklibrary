
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
    fetch("https://openlibrary.org/search.json?q=fiction")
        .then(response => response.json())
        .then(data => {
            console.log(data.docs);

            for (let i = 0; i < 10; i++) {
                const book = data.docs[i];
                console.log(book.author_name);
                console.log("Title:", book.title);

                printdefault(
                    book.title,
                    book.author_name ? book.author_name.join(", ") : "Unknown",
                    "N/A"
                );
            }
        })
        .catch(error => console.error("Error:", error));
}

function printdefault(book, author, pages) {
    const newdiv = document.createElement("div");
    newdiv.innerHTML = `
    <h3>Book Name: ${book} </h3> 
    <p>Author : ${author}</p>
    <p> Number of pages: ${pages}<p/>
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


