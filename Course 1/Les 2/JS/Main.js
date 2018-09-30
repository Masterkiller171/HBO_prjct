//Wanneer de gebruiker op de rechter arrow klikt zal de rechter box 100% worden en dus meer content laten zien
function clckright() {
    var leftAr = document.getElementById("left-arr");

    if (leftAr.style.display === "inline-block") {

        document.getElementById("right").style.width = "100%";
        leftAr.style.display = "none";
        document.getElementById("right-arr").style.transform = "initial";

    } else {

        document.getElementById("right").style.width = "50%";
        document.getElementById("left-arr").style.display = "inline-block";
        document.getElementById("right-arr").style.transform = "initial";

    }
}

//Wanneeer de gebruiker op de linker arrow klikt verdwijnt het tweede vak zodat dat links 100% word
function clckleft() {
    var right = document.getElementById("right");

    if (right.style.display === "inline-block") {
        right.style.display = "none";
        document.getElementById("left-arr").setAttribute('style', 'transform: rotate(180deg);');
        document.getElementById("left-arr").setAttribute('style', 'padding-left: 90%;');
    } else {

        right.style.display = "inline-block";
        document.getElementById("left-arr").style.transform = "initial";
        document.getElementById("left-arr").setAttribute('style', 'padding-left: 43%;');

    }
}
