var $screen = document.querySelector(".js-screen");
var $zero = document.querySelector(".js-zero");
var $one = document.querySelector(".js-one");
var $two = document.querySelector(".js-two");
var $three = document.querySelector(".js-three");
var $four = document.querySelector(".js-four");
var $five = document.querySelector(".js-five");
var $six = document.querySelector(".js-six");
var $seven = document.querySelector(".js-seven");
var $eight = document.querySelector(".js-eight");
var $nine = document.querySelector(".js-nine");
var $more = document.querySelector(".js-more");
var $less = document.querySelector(".js-less");
var $x = document.querySelector(".js-x");
var $slash = document.querySelector(".js-slash");
var $equal = document.querySelector(".js-equal");
var $ce = document.querySelector(".js-ce");

function zero(){
    var numberZero = $zero.innerHTML;
    $screen.innerHTML = numberZero;
}
function one(){
    var numberOne = $one.innerHTML;
    $screen.innerHTML = numberOne;
}
function two(){
    var numberTwo = $two.innerHTML;
    $screen.innerHTML = numberTwo;
}
function three(){
    var numberThree = $three.innerHTML;
    $screen.innerHTML = numberThree;
}
function four(){
    var numberFour = $four.innerHTML;
    $screen.innerHTML = numberFour;
}
function five(){
    var numberFive = $five.innerHTML;
    $screen.innerHTML = numberFive;
}
function six(){
    var numberSix = $six.innerHTML;
    $screen.innerHTML = numberSix;
}
function seven(){
    var numberSeven = $seven.innerHTML;
    $screen.innerHTML = numberSeven;
}
function eight(){
    var numberEight = $eight.innerHTML;
    $screen.innerHTML = numberEight;
}
function nine(){
    var numberNine = $nine.innerHTML;
    $screen.innerHTML = numberNine;
}
function more(){
    var numberMore = $more.innerHTML;
    $screen.innerHTML = numberMore;
}
function less(){
    var numberLess = $less.innerHTML;
    $screen.innerHTML = numberLess;
}
function x(){
    var numberX = $x.innerHTML;
    $screen.innerHTML = numberX;
}
function slash(){
    var numberSlash = $slash.innerHTML;
    $screen.innerHTML = numberSlash;
}
function equal(){
    var numberEqual = $equal.innerHTML;
    $screen.innerHTML = numberEqual;
}
function ce(){
    var numberCe = $ce.innerHTML;
    $screen.innerHTML = numberCe;
}

$zero.addEventListener("click", zero);
$one.addEventListener("click", one);
$two.addEventListener("click", two);
$three.addEventListener("click", three);
$four.addEventListener("click", four);
$five.addEventListener("click", five);
$six.addEventListener("click", six);
$seven.addEventListener("click", seven);
$eight.addEventListener("click", eight);
$nine.addEventListener("click", nine);
$more.addEventListener("click", more);
$less.addEventListener("click", less);
$x.addEventListener("click", x);
$slash.addEventListener("click", slash);
$equal.addEventListener("click", equal);
$ce.addEventListener("click", ce);














