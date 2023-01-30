const menuBar = document.getElementById("container");
const menuButton = document.getElementById("menu-bar");

menuButton.onclick = function () {
  if (menuBar.style.display !== "none") {
    menuBar.style.display = "none";
  } else {
    menuBar.style.display = "block";
  }
};