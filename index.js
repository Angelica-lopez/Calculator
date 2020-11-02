var $screen = document.querySelector(".js-screen");
var $numbersButtons = document.querySelectorAll(".js-number");
var $more = document.querySelector(".js-more");
var $less = document.querySelector(".js-less");
var $x = document.querySelector(".js-x");
var $slash = document.querySelector(".js-slash");

console.log($numbersButtons);

$numbersButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", onClickNumberButton);
})

function onClickNumberButton(event) {
    $screen.innerHTML = event.target.innerHTML;
}
















