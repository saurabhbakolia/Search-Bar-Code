const first = document.querySelector('.first');
const searchToggle = document.querySelector('.second')
const arrowIcon = document.querySelector('.arrow');
const searchIcon = document.querySelector('.search');

searchToggle.addEventListener("click", () =>{
    console.log("icon1 clicked");
    arrowIcon.classList.toggle('hide');
    searchIcon.classList.toggle('hide');
    first.classList.toggle('full_width');
});
