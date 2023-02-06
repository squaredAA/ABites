let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#msearchBox').onclick = () => {
  searchForm.classList.toggle('active');
}