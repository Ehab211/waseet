/* For Commercial Scrolling Links */
function activeCommercialTapLinkshandler(evnet, commercialTapName) {
  localStorage.clear();
  localStorage.setItem(
    "activeCommercialTapLink",
    evnet.currentTarget.getAttribute("data-name")
  );
  let commercialtapContent = document.querySelectorAll(".commercialtapContent");
  commercialtapContent.forEach((el) => {
    el.style.display = "none";
  });
  let comercialTaps = document.querySelectorAll(".comercial-taps");
  comercialTaps.forEach((el) => {
    el.className = el.className.replace(" activeCommercialTapLinks", "");
  });
  document.querySelector("#" + commercialTapName).style.display = "block";
  evnet.currentTarget.className += " activeCommercialTapLinks";
  console.log(localStorage.getItem("activeCommercialTapLink"));
}

document.addEventListener("DOMContentLoaded", () => {
  let defaultOpenCommercialCat = document.getElementById(
    "defaultOpenCommercialCat"
  );
  if (localStorage.getItem("activeCommercialTapLink")) {
    let querySelector = `[data-name="${localStorage.getItem(
      "activeCommercialTapLink"
    )}"]`;
    document.querySelector(querySelector).click();
  } else {
    defaultOpenCommercialCat.click();
  }
  if (localStorage.getItem("scrollX")) {
    document
      .querySelector(".comercial-taps-bar")
      .scrollBy(localStorage.getItem("scrollX"), 0);
  }
});

let clickMe = document.querySelector(".clickMe");
let regionFlag = document.querySelector(".regionFlag");
let flagRegionUL = document.querySelector(".flagRegionUL");
let flagRegionULLi = document.querySelector(".flagRegionULLi");
let chevronDown = document.querySelector(".clickMe span i");
clickMe.addEventListener("click", regionsMenuToggle);
function regionsMenuToggle() {
  flagRegionUL.classList.toggle("overflow");
  flagRegionUL.classList.toggle("hideShowRegionList");
  chevronDown.classList.toggle("transformRotate");
}

function hrefCancle() {
  return false;
}

$(".next").on("click", function () {
  $(".centerSliderSmView").slick("slickNext");
});
$(".prev").on("click", function () {
  $(".centerSliderSmView").slick("slickPrev");
});
$(document).ready(function () {
  $(".centerSliderSmView").slick({
    centerMode: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 999999,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          adaptiveHeight: true,
          fade: true,
          cssEase: "linear",
        },
      },
    ],
  });
  $(".nextstickAds").on("click", function () {
    $(".autoplaystickAddSlider").slick("slickNext");
  });
  $(".prevstickAds").on("click", function () {
    $(".autoplaystickAddSlider").slick("slickPrev");
  });
  $(".autoplaystickAddSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: "20px",
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991.9,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  /* autoplayCommercialsAddSliderControl */
  $(".nextCommercialsAds").on("click", function () {
    $(".autoplayCommercialsAddSlider").slick("slickNext");
  });
  $(".prevCommercialsAds").on("click", function () {
    $(".autoplayCommercialsAddSlider").slick("slickPrev");
  });

  $(".autoplayCommercialsAddSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: "20px",
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991.9,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          margin: "20px",
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          mobileFirst: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".categorySelect").select2({ theme: "bootstrap" });
});

$(document).ready(function () {
  $(".citiesSelect").select2({ theme: "bootstrap" });
});
function notiBtn() {
  // Check if the media query is true
  if (window.matchMedia("(max-width: 991px)").matches) {
    // Then trigger an alert
    window.location = "notification.html";
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    document
      .querySelector(".notificationDiv")
      .classList.toggle("displayToggle");
  }
}

function handleCookies() {
  setTimeout(function () {
    document.querySelector(".cookiesLg").style.display = "none";
    document.querySelector(".chat").style.bottom = "35px";
  }, 1000);
}

let favIconsAll = document.querySelectorAll(".fa-heart-caller");
(function idAdd() {
  let stickyItem = document.querySelectorAll(".stickyItem");
  CommercialsItem = document.querySelectorAll(".CommercialsItem");
  stickyItem.forEach((el, index) => {
    el.setAttribute("id", "stickyItem" + index);
  });
  CommercialsItem.forEach((el, index) => {
    el.setAttribute("id", "CommercialsItem" + index);
  });
  favIconsAll.forEach((el, index) => {
    el.setAttribute("id", "fav_" + index);
  });
})();

function handleFavIcon(x) {
  x.classList.toggle("favIconRedToggle");
}
