var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var tab = document.getElementsByClassName("tab");
var container = document.getElementsByClassName("container")[0];
var i;

/* 
function topFunction() {
  document.body.scrollTop = document.body.offsetHeight;
  document.documentElement.scrollTop = document.documentElement.offsetHeight;
}
*/

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;

    for(j = 0; j< panels.length; j++) {

      if(panels[j].id != elementId) {  
        panels[j].style.maxHeight = null;
        acc[j].classList.remove("active");
      } else {
        if(panels[j].style.maxHeight) {
          panels[j].style.maxHeight = null;
        } else {
          if(container.offsetTop) {
            panels[j].style.maxHeight = container.offsetTop + "px";
          } else {
            panels[j].style.maxHeight = tab[0].offsetTop + "px";
          }
        }
      }
    }
/* 
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = container.offsetTop + tab.offsetHeight + acc[0].offsetHeight + "px";
    } */
  });
}