var vehicles = document.getElementsByClassName("vehicle-button");
var accNodes = document.getElementsByClassName("accordion");

for (i = 0; i < vehicles.length; i++) {
  vehicles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    for(j=0; j < accNodes.length; j++) {
      if(accNodes[j].id == 'vehicle') {
        accNodes[j].getElementsByTagName("I")[0].innerHTML = this.getElementsByTagName("I")[0].innerHTML;
        accNodes[j].getElementsByClassName("description")[0].innerHTML = this.getElementsByClassName("description")[0].innerHTML;
        accNodes[j].getElementsByClassName("caption")[0].innerHTML = this.getElementsByClassName("caption")[0].innerHTML;
        accNodes[j].getElementsByClassName("price")[0].getElementsByTagName("SPAN")[0].innerHTML = this.getElementsByClassName("price")[0].getElementsByTagName("SPAN")[0].innerHTML;
      }
    }

    for(j = 0; j< vehicles.length; j++) {
      if(vehicles[j].id != elementId) {  
        vehicles[j].classList.remove("active");
      } 
    }
  });
}

