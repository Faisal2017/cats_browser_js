// var app = function() {

//   var ul = document.createElement('ul');
//   ul.classList.add('cat');

//   var li1 = document.createElement('li');
//   li1.innerText = "Name : Dizzy";

//   var li2 = document.createElement('li');
//   li2.innerText = "Favourite food : Tuna";

//   var li3 = document.createElement('li');
//   var image = document.createElement('img');
//   image.style.width = "500px";
//   image.src = "http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg";

//   li3.appendChild(image);

//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);

//   var cats = document.querySelector('#cats');
//   cats.appendChild(ul);
// }

// window.addEventListener('load', app);

var addCat = function(name, favFood, imageURL) {
  var nameLi = createNameLi(name);
  var favFoodLi = createFavFoodLi(favFood);
  var imageURL = createImage(imageURL);

  appendElements(nameLi, favFoodLi, imageURL);
}

var createNameLi = function(name) {
  var li1 = document.createElement('li');
  li1.innerText = "Name : " + name;
  return li1;
}

var createFavFoodLi = function(favFood) {
  var li2 = document.createElement('li');
  li2.innerText = "Favourite food : " + favFood;
  return li2;
} 

var createImage = function(imageURL) {
  // var li3 = document.createElement('li');
  var image = document.createElement('img');
  image.style.width = "500px";
  image.style.height = "300px";
  image.src = imageURL;
  return image;
}

var appendElements = function(li1, li2, li3) {
  var ul = document.createElement('ul');
  ul.classList.add('cat');

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
}

var app = function() {
  addCat("Tails", "Dreamies", "http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg")
}

window.addEventListener('load', app);
