document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", resizeNav);
  window.addEventListener("resize", resizeNav);

  function resizeNav() {
    const thisNav = document.querySelector(".current-menu-item").offsetLeft;
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        const left = this.offsetLeft - thisNav;
        const width = this.offsetWidth;
        const initWidth =
          document.querySelector(".current-menu-item").offsetWidth;
        document.querySelector(".wee").style.left = left + "px";
        document.querySelector(".wee").style.width = width + "px";
      });

      item.addEventListener("mouseout", function () {
        const initWidth =
          document.querySelector(".current-menu-item").offsetWidth;
        document.querySelector(".wee").style.left = "0";
        document.querySelector(".wee").style.width = initWidth + "px";
      });
    });
  }
});
