function clckright(){
    var leftar = document.getElementById("left-arr");
    
    if(leftar.style.display === "inline-block"){ 
        
    document.getElementById("right").style.width = "100%";
    leftar.style.display = "none";
    document.getElementById("right-arr").style.transform = "initial";
        
    }else{
        
    document.getElementById("right").style.width = "50%";
    document.getElementById("left-arr").style.display = "inline-block";
    document.getElementById("right-arr").style.transform = "initial";
        
    }
}    

function clckleft(){
    var rittar = document.getElementById("right");
    
    if(leftar.style.display === "inline-block"){ 
        
    document.getElementById("right").style.width = "100%";
    leftar.style.display = "none";
    document.getElementById("right-arr").style.transform = "initial";
        
    }else{
        
    document.getElementById("right").style.width = "50%";
    document.getElementById("left-arr").style.display = "inline-block";
    document.getElementById("right-arr").style.transform = "initial";
        
    } 
}