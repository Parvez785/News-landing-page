var openMenu= document.querySelector(".hamburger");
var closeMenu= document.querySelector(".close");
var nav= document.querySelector(".nav");
console.log(nav);
openMenu.addEventListener("click", () => {
  console.log("I'm being clicked");
  nav.style.display="block";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  console.log("I'm being clicked");
  nav.style.display="none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});