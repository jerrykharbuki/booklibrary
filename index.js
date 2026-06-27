
const dialog = document.getElementById("bookDialog");
// getting book from dialog 
document.getElementById("addBook").addEventListener("click"
    , () => {
        dialog.showModal();

    }

);

const form = document.getElementById("bookForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const book = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    console.log(book);

    dialog.close();

}
);
//to close the dialog 
const close = document.getElementById("closeBtn");
document.getElementById("closeBtn").addEventListener("click", () => {
    dialog.close();
}
);

//taking the input from user



























//or delete all books
// const clearBtn = document.querySelector("#clear");
// clearBtn.addEventListener("click", () => {
//     bookarr.length = 0;
//     container.innerHTML = "";
// })


