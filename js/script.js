//alert("Nous venons de faire du JS :)))");

let jn = document.querySelector(".jn");
let jour = document.getElementById("jour");
let nuit = document.getElementById("nuit");

jour.addEventListener("click", displayJour);

function displayJour() {
  jn.classList.toggle("block");
  jour.classList.toggle("none");

  nuit.classList.toggle("block");
}
