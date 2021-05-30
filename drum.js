// alert("I'm clicked");
// document.querySelector("button").addEventListener("click",function(){alert("I'm clicked");});
// var numberOfDrumButton=document.querySelectorAll(".drum").length;
// var i=0;
// while(i<numberOfDrumButton)
// {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//   i++;
// }
// function handleClick()
// {
// 	this.style.color="black";
// }

                    // MAIN CODE STARTS HERE



var numberOfDrumButton=document.querySelectorAll(".drum").length;
var i=0;
while(i<numberOfDrumButton)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
  i++;
}
document.addEventListener("keypress",function(){
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key)
{
  switch(key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:console.log(buttonInnerHtml);
  }
}
function buttonAnimation(currentKey)
{
  var activekey=document.querySelector("." + currentKey);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed");
  },150);
}
