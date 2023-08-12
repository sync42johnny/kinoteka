const header = document.querySelector("[data-header]");
const openNavSubmenu = document.querySelector("[data-open-navsubmenu]");
const navSubmenu = document.querySelector("[data-navsubmenu]");
const openUsermenu = document.querySelector("[data-open-usermenu]");
const usermenu = document.querySelector("[data-usermenu]");

const onWindowScroll = () => {
  if (window.scrollY > 20) {
    header.style.backgroundColor = "#0c0d14";
  } else {
    header.style.backgroundColor = "transparent";
  }
};

const onTouchOpenNavSubmenu = (event) => {
  event.preventDefault();
  navSubmenu.classList.toggle("active");
};

const onTouchOpenUsermenu = (event) => {
  event.preventDefault();
  usermenu.classList.toggle("active");
};

const setListeners = () => {
  window.addEventListener("scroll", onWindowScroll);
  openNavSubmenu.addEventListener("touchstart", onTouchOpenNavSubmenu);
  openUsermenu.addEventListener("touchstart", onTouchOpenUsermenu);
};

const init = () => {
  setListeners();
};

export default {
  init,
};
