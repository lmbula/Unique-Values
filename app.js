// Unique Values
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

//const categories = menu.map((item)=>item.category); this will display all the categories if there's two dinners two will be shown
//const categories = new Set(menu.map((item) => item.category)); this will display only the unique values of the categories in an object
//const categories = [...new Set(menu.map((item) => item.category))]; this is a spread operator that will convert the object into an array
const categories = [
  "all",
  "mix",
  ...new Set(menu.map((item) => item.category)),
]; // the two values added will be added into the array created
console.log(categories);

const result = document.querySelector(".result");
//this map function will loop over the category array and display the unique categories listed from the categories array we created
result.innerHTML = categories.map((category) => {
  return`<button>${category}</button>`;
})
.join('');


