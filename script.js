/* .js files add interaction to your website */
var displayName = document.getElementById("thanks");
var button = document.getElementById("myButton");
console.log(button);
button.addEventListener("click", displayThanks);

function displayThanks(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ("Thank You!!");
}
