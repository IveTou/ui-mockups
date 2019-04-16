var ubtns = document.getElementsByClassName("utility-button");

for (i = 0; i < ubtns.length; i++) {
  ubtns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    disableOthers(elementId);
  });
}

function disableOthers(elementId) {
  for (i = 0; i < ubtns.length; i++) {
    if(ubtns[i].id != elementId) {
      ubtns[i].classList.remove("active");
    }
  }
}

function closeParentPanel(evt, id) {
  for(i = 0; i < acc.length; i++) {
    if(acc[i].id === id) {
      acc[i].classList.remove("active");
    }
  }
  tab[0].style.display = 'flex';
  submit[0].style.display = 'block';
  evt.currentTarget.parentElement.parentElement.parentElement.style.maxHeight = null;
}