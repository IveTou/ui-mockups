var payments = document.getElementsByClassName("payment-button");

for (i = 0; i < payments.length; i++) {
  payments[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    for(j=0; j < acc.length; j++) {
      if(acc[j].id == 'payment') {
        acc[j].getElementsByTagName("I")[0].innerHTML = this.getElementsByTagName("I")[0].innerHTML;
        acc[j].getElementsByClassName("description")[0].innerHTML = this.getElementsByClassName("description")[0].innerHTML;
        acc[j].getElementsByClassName("caption")[0].innerHTML = this.getElementsByClassName("caption")[0].innerHTML;
      }
    }

    for(j=0; j < payments.length; j++) {
      if(payments[j].id !== elementId) {
        payments[j].classList.remove("active");
      }
    }

    closePanel(acc, elementId, panels, tab, submit, containerOffSet, tabHeight, submitHeight, true);
  });
}
