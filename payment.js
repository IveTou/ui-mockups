var paymentss = document.getElementsByClassName("payments-button");

for (i = 0; i < paymentss.length; i++) {
  paymentss[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var elementId = this.id;
    for(j=0; j < acc.length; j++) {
      if(acc[j].id == 'payments') {
        acc[j].getElementsByTagName("I")[0].innerHTML = this.getElementsByTagName("I")[0].innerHTML;
        acc[j].getElementsByClassName("description")[0].innerHTML = this.getElementsByClassName("description")[0].innerHTML;
        acc[j].getElementsByClassName("caption")[0].innerHTML = this.getElementsByClassName("caption")[0].innerHTML;
      }
    }

    for(j=0; j < paymentss.length; j++) {
      if(paymentss[j].id !== elementId) {
        paymentss[j].classList.remove("active");
      }
    }

    closePanel(acc, elementId, panels, tab, submit, containerOffSet, tabHeight, submitHeight, true);
  });
}
