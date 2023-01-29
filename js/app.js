var selectCountry = document.getElementById("select-country");
var movingIcon = document.getElementById("moving-icon");
var optionList = document.getElementById("option-list");

selectCountry.addEventListener("click", () => {
  optionList.classList.toggle("hidden");
  movingIcon.classList.toggle("rotate");
});
