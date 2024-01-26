function changeTheme() {
  let darkMode = document.querySelectorAll(".lightMode");
  darkMode.forEach((element) => {
    element.classList.toggle("darkMode");
  });

  let darkModeBody = document.querySelectorAll(".lightModeBody");
  darkModeBody.forEach((element) => {
    element.classList.toggle("darkModeBody");
  });

  let darkModeContainer = document.querySelectorAll(".lightModeContainer");
  darkModeContainer.forEach((element) => {
    element.classList.toggle("darkModeContainer");
  });

  let darkModeH2 = document.querySelectorAll(".lightModeH2");
  darkModeH2.forEach((element) => {
    element.classList.toggle("darkModeH2");
  });

  let darkHomePage = document.querySelectorAll(".lightHomePage");
  darkHomePage.forEach((element) => {
    element.classList.toggle("darkHomePage");
  });
}

//popup

function togglePopup(event) {
  event.preventDefault();
  let popup = document.querySelector("#popupOverlay");

  popup.classList.toggle("open");
}
//pour annulé un lien
// document.getElementById("noLien").addEventListener("click", function (event) {
//   event.preventDefault();
//   //jouer la fonction
//   togglePopup();
// });
