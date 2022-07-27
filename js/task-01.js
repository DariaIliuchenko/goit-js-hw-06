const categoriesRef = document.querySelector("#categories");
console.log("Number of categories:", categoriesRef.children.length);

const listItems = document.querySelectorAll(".item");
listItems.forEach((element) => {
    const firstListTitle = element.firstElementChild;
    console.log(
        "Category:",
        firstListTitle.textContent,
        "Elements:",
        element.querySelectorAll("li").length
    );
 })