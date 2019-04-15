var vehicles = document.getElementsByClassName("vehicle-button");

for (i = 0; i < vehicles.length; i++) {
  vehicles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    for(j=0; j < acc.length; j++) {
      if(acc[j].id == 'vehicle') {
        acc[j].getElementsByTagName("I")[0].innerHTML = this.getElementsByTagName("I")[0].innerHTML;
        acc[j].getElementsByClassName("description")[0].innerHTML = this.getElementsByClassName("description")[0].innerHTML;
        acc[j].getElementsByClassName("caption")[0].innerHTML = this.getElementsByClassName("caption")[0].innerHTML;
        acc[j].getElementsByClassName("price")[0].getElementsByTagName("SPAN")[0].innerHTML = this.getElementsByClassName("price")[0].getElementsByTagName("SPAN")[0].innerHTML;
      }
    }

    closePanel(acc, elementId, panels, tab, submit, containerOffSet, tabHeight, submitHeight, true);
  });
}

