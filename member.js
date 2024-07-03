function skillsMember() {
  // Get the input field
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  var a = ul.getElementsByTagName("a");
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}