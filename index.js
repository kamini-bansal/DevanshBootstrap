var i=0;
var array_images= [1,2,3,4,5];

var firstString= "images/image";
var secondString= ".jpg";
var len=array_images.length;
var next = firstString + array_images[i+1] + secondString;
var previous = firstString + array_images[i-1] + secondString;

function next_image(){
  document.querySelector(".current_image").setAttribute("src",next);
  console.log("value of next" + next);
}

function previous_image(){
  document.querySelector(".current_image").setAttribute("src",previous);
}
