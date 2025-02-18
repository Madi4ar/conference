const menu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-menu");
menu.onclick = function () {
  document.querySelector(".nav-block").classList.add("!flex");
};

closeButton.onclick = function () {
  document.querySelector(".nav-block").classList.remove("!flex");
};

$(document).ready(function () {
  $(".slider-speakers").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          //autoplay:true,
        },
      },
    ],
  });
});

let mainInfo = document.querySelector(".mainInfo");
let holiInfo = document.querySelector(".holiInfo");
let feedInfo = document.querySelector(".feedInfo");
let mainBtn = document.querySelector(".main");
let holiBtn = document.querySelector(".holi");
let feedBtn = document.querySelector(".feed");
mainBtn.onclick = function () {
  openTab(mainInfo, mainBtn);
};

holiBtn.onclick = function () {
  openTab(holiInfo, holiBtn);
};

feedBtn.onclick = function () {
  openTab(feedInfo, feedBtn);
};
function openTab(tabContent, tabButton) {
  let i, tabcontents, tablinks;

  tabcontents = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  tabContent.style.display = "block";
  tabButton.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});
