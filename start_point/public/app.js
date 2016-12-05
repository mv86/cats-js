var makeCatUl = function () {
  var newUl = document.createElement('ul');
  newUl.classList.add('cat');
  return newUl;
};

var catName = function(name) {
  var thisName = document.createElement('li');
  thisName.innerText = name;
  return thisName;
};

var catFavFood = function(favFood) {
  var thisFood = document.createElement('li');
  thisFood.innerText = favFood;
  return thisFood;
};

var catPhoto = function(photo) {
  var thisPhoto = document.createElement('img');
  thisPhoto.src = photo;
  thisPhoto.width = '500';
  return thisPhoto;
};

var makeNewCat = function(name, favFood, photo) {
  var catUl = makeCatUl();
  var catsName = catName(name);
  var catsFavFood = catFavFood(favFood);
  var catsPhoto = catPhoto(photo);

  catUl.appendChild(catsName);
  catUl.appendChild(catsFavFood);
  catUl.appendChild(catsPhoto);

  var catList = document.querySelector('#cats');
  catList.append(catUl);
};

window.onload = function() {
  makeNewCat('Name: Johnny D', 'Favourite Food: Grass', 'http://3.bp.blogspot.com/-bDvYRChttwM/Tv28XAwmloI/AAAAAAAApxo/csE7Ihi1M90/s1600/Popular+Breeds+-+004.jpg');
};