let products = JSON.parse(localStorage.getItem("product")) || [];
const ui = (products) => {
  console.log(products);
  document.getElementById("ui").innerHTML = "";
  products.map((product) => {
    let img = document.createElement("img");
    img.src = product.img;
    let title = document.createElement("h2");
    title.innerHTML = product.title;
    let price = document.createElement("h3");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let div = document.createElement("div");
    div.append(img, title, price, category);
    document.getElementById("ui").append(div);
  });
};
ui(products);
const productdata = (e) => {
  e.preventDefault();
  let product = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  products.push(product);
  //   console.log(products);
  localStorage.setItem("product", JSON.stringify(products));
  ui(products);
};
document.querySelector("form").addEventListener("submit", productdata);
// sorting by price
const handlelth = () => {
  let data = products.sort((a, b) => a.price - b.price);
  ui(data);
  console.log(data);
};
document.getElementById("lth").addEventListener("click", handlelth);
const handlehtl = () => {
  let data = products.sort((a, b) => b.price - a.price);
  ui(data);
  console.log(data);
};
document.getElementById("htl").addEventListener("click", handlehtl);
document.getElementById("htl").addEventListener("click", handlehtl);

// filter products by category

const Handelcategory = (cat) => {
  let data = products.filter((value) => value.category == cat);

  console.log(data);
  ui(data);
};

let cat = ["men", "women", "kids"];

for (let i = 0; i < cat.length; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = cat[i];
  btn.setAttribute("id", cat[i]);
  document.getElementById("btns").append(btn)
}

for (let i = 0; i < cat.length; i++) {
  document
    .getElementById(cat[i])
    .addEventListener("click", () => Handelcategory(cat[i]));
}