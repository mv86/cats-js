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

var cat1 = {name: 'Name: Boba', favFood: 'Favourite Food: Sock Fluff', photo: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'};

var cat2 = {name: 'Name: Barnaby', favFood: 'Favourite Food: Tuna', photo: 'http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg'};

var cat3 = {name: 'Name: Max', favFood: 'Favourite Food: Whiskas Temptations', photo: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'};

var cat4 = {name: 'Name: Johnny D', favFood: 'Favourite Food: Grass', photo: 'http://3.bp.blogspot.com/-bDvYRChttwM/Tv28XAwmloI/AAAAAAAApxo/csE7Ihi1M90/s1600/Popular+Breeds+-+004.jpg'};

var arrayOfCats = [cat1, cat2, cat3, cat4]

var displayCats = function() {
  for (cat of arrayOfCats) {
    makeNewCat(cat.name, cat.favFood, cat.photo);
  };
};

window.onload = displayCats;