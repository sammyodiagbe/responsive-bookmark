const dropdownButton = document.querySelector("#dropdown-button");
const closeButton = document.querySelector("#close-button");
const mobileNavigation = document.querySelector("#mobile-navigation");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".a-tab");
const contactUsButton = document.querySelector("#contact-us-btn");
const inputContainer = document.querySelector("#input-container");
const input = document.querySelector("#email-input");
const error = document.querySelector("#error");
const errorMessage = document.querySelector("#error-message");

for (let x = 0; x < tabBtns.length; x++) {
  tabBtns[x].addEventListener("click", (event) => {
    const targetId = event.target.dataset["target"];
    const targetElement = document.querySelector(`#${targetId}`);
    for (let a = 0; a < tabBtns.length; a++) {
      tabs[a].classList.remove("active");
      tabBtns[a].classList.remove("active");
    }

    event.target.classList.add("active");
    targetElement.classList.add("active");
  });
}

dropdownButton.addEventListener("click", (event) => {
  mobileNavigation.classList.remove("close");
  mobileNavigation.classList.add("open");
});

closeButton.addEventListener("click", (event) => {
  mobileNavigation.classList.remove("open");
  mobileNavigation.classList.add("close");
});

contactUsButton.addEventListener("click", (event) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(input.value)) {
    error.style.display = "none";
    errorMessage.style.display = "none";
    inputContainer.classList.remove("error");
    return;
  }
  error.style.display = "block";
  errorMessage.style.display = "block";
  inputContainer.classList.add("error");
});
