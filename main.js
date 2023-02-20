var imgsList = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var closeEl = document.getElementById("close");
var prevEl = document.getElementById("prev");
var nextEl = document.getElementById("next");
var currentIndex = 0;
for (var i = 0; i < imgsList.length; i++) {
  imgsList[i].addEventListener("click", function (e) {
    boxContainer.style.display = "flex";
    var imgSrc = e.target.getAttribute("src");
    currentIndex = imgsList.indexOf(e.target);
    innerBox.style.backgroundImage = "url(" + imgSrc + ")";
  });
}

nextEl.addEventListener("click", nextTag);

function nextTag() {
  currentIndex++;
  if (currentIndex == imgsList.length) {
    currentIndex = 0;
  }
  console.log(currentIndex);
  var imgSrc = imgsList[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}
prevEl.addEventListener("click", prevTag);
function prevTag(){
    currentIndex--;
    if (currentIndex <0 ) {
      currentIndex = imgsList.length-1;
    }
    console.log(currentIndex);
    var imgSrc = imgsList[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")";
  }
closeEl.addEventListener("click",closeTag)

function closeTag(){
    boxContainer.style.display="none"
}

document.addEventListener("keyup", function(e){
    console.log(e.key);
    if(e.key)
    if(e.key=="ArrowRight"){
        nextTag()
    }
    else if(e.key=="ArrowLeft"){
        prevTag()
    }
    else if(e.key=="Escape"){
        closeTag()
    }
    
})