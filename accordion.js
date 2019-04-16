var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var tab = document.getElementsByClassName("tabheader");
var submit = document.getElementsByClassName("submit");
var container = document.getElementsByClassName("container");

const containerOffSet = container[0].offsetTop;
const tabHeight = tab[0].offsetHeight;
const submitHeight = submit[0].offsetHeight;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;

    closePanel(acc, elementId, panels, tab, submit, containerOffSet, tabHeight, submitHeight);
  });
}

function showOptions(panel, tab, submit) {
  panel.style.maxHeight = null;
  tab.style.display = 'flex';
  submit.style.display = 'block';
}

function closePanel(acc, elementId, panels, tab, submit, containerH, tabH, submitH, onPanel = false) {
  for(j = 0; j< panels.length; j++) {

    if(panels[j].id != elementId) {  
      panels[j].style.maxHeight = null;
      acc[j].classList.remove("active");
      if(onPanel) {
        showOptions(panels[j], tab[0], submit[0]);
      }
    } else {
      if(panels[j].style.maxHeight) {
        showOptions(panels[j], tab[0], submit[0]);
      } else {
        tab[0].style.display = 'none';
        submit[0].style.display = 'none';
        panels[j].style.maxHeight = containerH + tabH + submitH + "px";
      }
    }
  }
}