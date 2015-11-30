function tocscroll() {
  window.setTimeout(partB,1000);
}

function partB() {
  var toc = document.getElementById("toc");
  var tocHeight = toc.offsetHeight;
  var activeTop = toc.querySelector(".active").offsetTop;
  toc.scrollTop = activeTop - (tocHeight / 2);
}