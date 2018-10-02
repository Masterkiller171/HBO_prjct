//Wanneeer de gebruiker op de linker arrow klikt verdwijnt het tweede vak zodat dat links 100% word
function clckleft() {
    var right = document.getElementById("right");

    if (right.style.display === "inline-block") {
        right.style.display = "none";
        document.getElementById("leftarrw").setAttribute('style', 'transform: rotate(180deg);');
    } else {
        right.style.display = "inline-block";

    }
}

//Wanneer de gebruiker op de rechter arrow klikt zal de rechter box 100% worden en dus meer content laten zien
function clckright() {
    var leftAr = document.getElementById("left");

    if (leftAr.style.display === "inline-block") {
        leftAr.style.display = "none";
        document.getElementById("rghtarrw").setAttribute('style', 'transform: rotate(180deg);');

    } else {
        document.getElementById("left").style.display = "inline-block";

    }
}


