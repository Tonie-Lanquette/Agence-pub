// function changeTheme() {
//   let darkMode = document.getElementsByClassName("lightMode");
//   darkMode.classList.toggle("darkMode");
// }

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
}
