//ham 버튼
$(document).ready(function () {
  let menuOpen = false;

  // 메뉴 열기
  $(".ham").click(function (event) {
    event.stopPropagation();
    $(".ham").toggleClass("open");
    $(".menu-list").toggle();

    if (menuOpen) {
      $("#main").show();
      menuOpen = false;
    } else {
      $("#main").hide();
      menuOpen = true;
    }
  });

  // 메뉴 닫기
  $(".ham.open").click(function () {
    $(".ham").removeClass("open");
    $("#main").removeClass("overflow-hidden");
    $("#menu-container .menu-list").removeClass("active");
    $(".menu-list").hide();
  });
});

// 메뉴 닫기
// $(document).click(function (event) {
//   if (!$(event.target).closest('.ham').length) {
//     $(".ham").removeClass("open");
//     $("#main").removeClass("overflow-hidden");
//     $("#menu-container .menu-list").removeClass("active");
//     $(".menu-list").hide();
//   }
// });

$(".ham").click(function (event) {
  event.stopPropagation();
  $(".ham").toggleClass("open");
  $(".menu-list").toggle();

  if (menuOpen) {
    $("#main").show();
    menuOpen = false;
  } else {
    $("#main").hide();
    menuOpen = true;
  }
});

//swiper
let swiper = new Swiper(".slide1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});
