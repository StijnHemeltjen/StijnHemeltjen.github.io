
    const tablinks = document.getElementsByClassName("tab-links")
    const tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }



    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    function showPopup(event) {
        event.preventDefault(); // Prevents the default behavior of the link
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }
    
    function closePopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }