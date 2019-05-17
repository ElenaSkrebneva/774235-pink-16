var svgs = document.querySelectorAll(".add-photo__filters-svg");
var i;
var g;
for (i=0; i<svgs.length; i++) {
  svgs[i].addEventListener("click", function() {
    for(g=0; g<svgs.length; g++) {
      svgs[g].classList.remove("add-photo__filters-svg--active");
    }
    this.classList.add("add-photo__filters-svg--active");
  });
}
