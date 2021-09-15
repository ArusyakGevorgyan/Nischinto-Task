window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navList = document.querySelector('#nav-list');

    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('menu_active');
    })
});



var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
  });


  var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordianBody = this.nextElementSibling;
    if (accordianBody.style.display === "block") {
        accordianBody.style.display = "none";
    } else {
        accordianBody.style.display = "block";
    }
  });
}