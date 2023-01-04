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

$(document).ready(function () {
  $(".centerSliderSmView").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".autoplaystickAddSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: "20px",
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    mobileFirst: true,
  });
});
