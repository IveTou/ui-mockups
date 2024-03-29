var options = document.getElementsByClassName("more-button");
var accNodes = document.getElementsByClassName("accordion");

for (i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    var childNodes = this.childNodes;

    for(j=0; j < accNodes.length; j++) {
      if(accNodes[j].id == 'more') {
        var childNodes = accNodes[j].getElementsByClassName("caption")[0].childNodes;

        for(k = 0; k < childNodes.length; k++) {
          if(childNodes[k].id == elementId) {
            accNodes[j].getElementsByClassName("caption")[0].removeChild(childNodes[k]);
            return null;
          }
        }
        
        var node = document.createElement("DIV"); 

        var id = document.createAttribute("id");
        id.value = elementId;
        var cls = document.createAttribute("class");
        cls.value = "chip";

        node.setAttributeNode(id); 
        node.setAttributeNode(cls);
        node.innerHTML = elementId;
        
        accNodes[j].getElementsByClassName("caption")[0].appendChild(node);
      }
    }
  });
}
