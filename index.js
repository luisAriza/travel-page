const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonTabBar = document.querySelector("#toggleTabBar");

toggleButton.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});
toggleButtonTabBar.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});
