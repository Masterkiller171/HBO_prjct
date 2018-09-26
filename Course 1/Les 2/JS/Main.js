var img = document.getElementById('avans_log');
var position = 0;
var id = setInterval(frame, 10);

function scroller(){ 
    
    if(pos == 200){
        clearInterval(id);
    }else{
        img.style.left = position + 'px';
    }
}