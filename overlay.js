var ocb = document.getElementsByClassName("overlaycoll");
    var i;
    
    for (i=0; i < ocb.length; i++) {
        ocb[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var ocbody = this.nextElementSibling;
            if (ocbody.style.display === "none") {
                ocbody.style.display = "block";
            } else {
                ocbody.style.display = "none";
            }
        });
    }