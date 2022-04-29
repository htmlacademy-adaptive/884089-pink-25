let nav = document.querySelector('.navigation');
let navList = document.querySelector('.nav-js');
let menu = document.querySelector('.toggle-js');
let open = document.querySelector('.toggle');
let close = document.querySelector('.toggle--close');

menu.onclick = function(evt) {
  evt.preventDefault();
  if(menu.classList.contains('toggle')) {
    nav.classList.add('navigation--open');
    navList.classList.add('navigation__list--open');
    menu.classList.remove('toggle');
    menu.classList.add('toggle--close');
  } else {
    nav.classList.remove('navigation--open');
    navList.classList.remove('navigation__list--open');
    menu.classList.remove('toggle--close');
    menu.classList.add('toggle');
  }

}
