function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//this javascript creates a dropdown menu that allows the user to travel between all of the pages//
showAbout = () => {
  document.getElementById("AboutInfo").style.display = "block";
};
hideAbout = () => {
  document.getElementById("AboutInfo").style.display = "none";
};
document
  .getElementById("AboutImage")
  .addEventListener("click", showAbout);
document
  .getElementById("AboutCloseBtn")
  .addEventListener("click", hideAbout);
//this javascript creates a popup whenver the user clicks on a certain image//
