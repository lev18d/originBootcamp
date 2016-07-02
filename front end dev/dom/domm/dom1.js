/**
 * Created by Dana on 6/14/2016.
 */
var getTextToResize = document.getElementsByTagName("p")[0];
// var fontSize = parseInt(window.getComputedStyle(getTextToResize).fontSize);
var fontSize =  16;
var maxSize = "100px";
var minSize = "6px";
var warningMsg = document.createElement("div");
document.body.appendChild(warningMsg);

function resizeText(clickEvent) {
    var btn = clickEvent.target;

    if(btn.textContent === "+"){
        if(getTextToResize.style.fontSize !== maxSize){
            fontSize ++;
            getTextToResize.style.fontSize = fontSize + "px";
            warningMsg.textContent = "";
        }
        else{
            warningMsg.textContent = "You have reached the maximum size of " + maxSize;
        }
    }
    else if (btn.textContent === "-") {
        if(getTextToResize.style.fontSize !== minSize){
            fontSize --;
            getTextToResize.style.fontSize = fontSize + "px";
            warningMsg.textContent = "";
        }
        else{
            warningMsg.textContent = "You have reached the minimum size of " + minSize;
        }
    }
}

var allBtns = document.getElementsByTagName("button");
for(var i=0;i<allBtns.length;i++){
    allBtns[i].addEventListener('click',resizeText);
}
