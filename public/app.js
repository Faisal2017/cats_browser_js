var app = function() {

  var ul = document.createElement('ul');
  ul.classList.add('cat');

  var li1 = document.createElement('li');
  li1.innerText = "Name : Dizzy";

  var li2 = document.createElement('li');
  li2.innerText = "Favourite food : Tuna";

  var li3 = document.createElement('li');
  var image = document.createElement('img');
  image.style.width = "500px";
  image.src = "http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg";

  li3.appendChild(image);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);


  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
}

window.addEventListener('load', app);