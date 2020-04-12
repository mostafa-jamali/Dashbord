var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("search-bar").style.top = "-60px";
  } else {
    document.getElementById("search-bar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}
