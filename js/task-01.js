const categories = document.querySelectorAll('.item');
const categoriesCount = categories.length
console.log("Number of categories:", categoriesCount);

for (let i=0; i<categoriesCount; i+=1) {
    const elementHeader = categories[i].firstElementChild.textContent;
    const items = categories[i].querySelectorAll('li');
    const itemsCount = items.length;

    console.log("Category: ", elementHeader)
    console.log("Elements: ", itemsCount)
}
