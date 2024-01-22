alert("Nous venons de faire du JS :)))");

let darkTrigger = document.getElementById(darkTrigger);

darkTrigger = addEventListener("click", changement);

function changement() {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
  } else {
    $("body").addClass("dark");
  }
}

changement();
