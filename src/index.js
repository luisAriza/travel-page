const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});
