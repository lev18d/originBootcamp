/**
 * Created by itc_user on 6/30/2016.
 */
"use strict";

//card creator


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
function cardCreator() {
    var idList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    idList = shuffle(idList);
    for (var x = 0; x < idList.length; x++) {
        var cardElement = document.createElement('div');
        document.body.appendChild(cardElement);
        cardElement.className = "card no-match-found";
        cardElement.setAttribute("data-img", "./Memorygameimages/" + idList[x] + ".jpg")
        cardElement.addEventListener("click",cardClicked);

    }
}

function cardClicked(e) {
    var theCardBeingClicked = e.target;
    theCardBeingClicked.style.backgroundImage = "url('" + theCardBeingClicked.getAttribute("data-img") + "')"

    var firstCard = document.getElementById("first-card");
    //var secondCard = document.getElementById("second-card");
    if (firstCard == null){
        theCardBeingClicked.id = "first-card";
    }else{
        firstCard.id = "";
        if(firstCard.getAttribute("data-img") == theCardBeingClicked.getAttribute("data-img")){
            // do nothing, because the image is staying there already
            firstCard.className = "card";
            theCardBeingClicked.className = "card";
            if (document.getElementsByClassName("no-match-found").length==0){
                alert("you won")
            }
        }else{
            setTimeout(function(){
                theCardBeingClicked.style.backgroundImage = "";
                firstCard.style.backgroundImage = "";

            },1000)
        }
    }

}



    cardCreator();
document.body.style.background = "#f3f3f3 url('https://i.ytimg.com/vi/2bNZr5zRAjM/maxresdefault.jpg') no-repeat right top";




