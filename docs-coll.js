var altt = document.getElementsByClassName("collapsible");
    var i;
    
    for (i=0; i < altt.length; i++) {
        altt[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var alttext = this.nextElementSibling;
            if (alttext.style.display === "block") {
                alttext.style.display = "none";
            } else {
                alttext.style.display = "block";
            }
        });
    }