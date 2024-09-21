// Nav

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// JavaScript for sticky navigation bar
// window.onscroll = function () {
    // Get the navigation bar element
    // var navbar = document.querySelector('.menu-bar');
  
    // Get the offset position of the navigation bar
    // var sticky = navbar.offsetTop;
  
    // Add the "sticky" class when you reach its scroll position
//     if (window.pageYOffset > sticky) {
//       navbar.classList.add('sticky');
//     } else {
//       navbar.classList.remove('sticky');
//     }
//   };
  
  

// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});
// });
// Nav
// gallery
document.querySelectorAll( " .image-container img").forEach(image =>{
	image.onclick = () =>{
	document.querySelector('.popup-image').style.display = 'block';
	document.querySelector('.popup-image img').src = image.getAttribute('src');
	}
});
	document.querySelector (' .popup-image span').onclick = () =>{
	 document.querySelector('.popup-image').style.display = 'none'; 
	}
    // Close popup when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelector('.popup-image').style.display = 'none';
    }
  });
	// gallery
	// Slider
	let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
// Slider





