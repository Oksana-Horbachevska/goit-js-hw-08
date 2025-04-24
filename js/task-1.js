const liElems = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${liElems.length}`);

liElems.forEach(function (elem, index) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
