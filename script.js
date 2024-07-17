let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    console.log("srijana")
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    
}

window.onscroll = (dets) =>{

    console.log(dets);
    console.log("hey")
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");

}

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer','BlockChain Developer' ,'Backend Developer','Web Designer'],
  typeSpeed: 80,
  backSpeed:80,
  backDelay:1200,
  loop:true,

});
