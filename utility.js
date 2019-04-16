var ubtns = document.getElementsByClassName("utility-button");

for (i = 0; i < ubtns.length; i++) {
  ubtns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    closeOthers(elementId);
  });
}

function closeOthers(elementId) {
  for (i = 0; i < ubtns.length; i++) {
    if(ubtns[i].id != elementId) {
      ubtns[i].classList.remove("active");
    }
  }
}