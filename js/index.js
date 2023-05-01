window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY>0);
})