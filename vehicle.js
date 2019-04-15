var vehicles = document.getElementsByClassName("vehicle-button");

for (i = 0; i < vehicles.length; i++) {
  vehicles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;

    for(j = 0; j< vehicles.length; j++) {
      if(vehicles[j].id != elementId) {  
        vehicles[j].classList.remove("active");
      } 
    }
  });
}