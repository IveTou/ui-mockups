var payments = document.getElementsByClassName("payment-button");
var accNodes = document.getElementsByClassName("accordion");

for (i = 0; i < payments.length; i++) {
  payments[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    for(j=0; j < accNodes.length; j++) {
      if(accNodes[j].id == 'payment') {
        accNodes[j].getElementsByTagName("I")[0].innerHTML = this.getElementsByTagName("I")[0].innerHTML;
        accNodes[j].getElementsByClassName("description")[0].innerHTML = this.getElementsByClassName("description")[0].innerHTML;
        accNodes[j].getElementsByClassName("caption")[0].innerHTML = this.getElementsByClassName("caption")[0].innerHTML;
      }
    }

    closePanel(acc, elementId, panels, tab, submit, containerOffSet, tabHeight, submitHeight, true);
  });
}
