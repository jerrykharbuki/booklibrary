
const dialog = document.getElementById("bookDialog");
// getting book from dialog 
document.getElementById("addBook").addEventListener("click"
    , () => {
        dialog.showModal();

    }
);
const close = document.getElementById("closeBtn");
document.getElementById("closeBtn").addEventListener("click", () => {
    dialog.close();
}
);
const form = document.getElementById(bookForm);
const SubBtn = document.getElementById(sub);
const cancelbt = document.getElementById(closeBtn)



//or delete all books 
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    bookarr.length = 0;
    container.innerHTML = "";
})

//for delete single book
container.addEventListener

