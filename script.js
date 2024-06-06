const ratingsBtn = document.querySelectorAll(".card__ratings li");
const submitBtn = document.getElementById("submit-btn");
const selectionOutput = document.getElementById("selection");
const homeState = document.getElementById("home-state");
const thankYouState = document.getElementById("thank-you-state");

ratingsBtn.forEach((item) =>
  item.addEventListener("click", (e) => {
    let current = document.querySelector(".selected-rating");
    e.target.classList.add("selected-rating");

    if (current) current.classList.remove("selected-rating");
  })
);

submitBtn.addEventListener("click", () => {
  homeState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  let selectedValue = document.querySelector(".selected-rating").value;
  selectionOutput.innerHTML = `
    <p>You selected ${selectedValue} out of 5</p>
  `;
});
