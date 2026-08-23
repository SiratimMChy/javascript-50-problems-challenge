
const list = document.getElementById("list");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }

});

const newItem = document.createElement("li");
newItem.textContent = "Mango";

list.appendChild(newItem);

