//change the comment displayed by changing the comment--active class
var commentsSection = document.querySelector(".comments");
var commentsBox = document.querySelector(".comments__comments");
var comments = commentsBox.querySelectorAll(".comment");
var arrowForward = commentsSection.querySelector(".comments__arrow--forward");
var arrowBackward = commentsSection.querySelector(".comments__arrow--back");
var i;
var x;
var g;
var y;

arrowForward.addEventListener("click", function() {
  for (i=0; i<comments.length; i++) {
    if (comments[i].classList.contains("comment--active")) {x = i}
    comments[i].classList.remove("comment--active");
  }
  if (x == comments.length - 1) {x = -1}
  comments[x+1].classList.add("comment--active");
});

arrowBackward.addEventListener("click", function() {
  for (g=0; g<comments.length; g++) {
    if(comments[g].classList.contains("comment--active")) {y = g}
    comments[g].classList.remove("comment--active");
  }
  if (y == 0) {y = comments.length}
  comments[y-1].classList.add("comment--active");
});
