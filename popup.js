document.addEventListener("DOMContentLoaded", () => {
  const monBouton = document.getElementById("monBouton");
  const message = document.getElementById("message");

  monBouton.addEventListener("click", () => {
    message.textContent = "Vous avez cliqué sur le bouton !";
  });
});