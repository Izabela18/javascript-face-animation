const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const SQUARE1 = document.querySelector('#square1');
const SQUARE2 = document.querySelector('#square2');
const MOON = document.querySelector('#moon');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {

    var horizontalPosition = windowWidth - e.clientX - 330;
    var verticalPosition= windowHeight - e.clientY - 5;

    var horizontalPositions = windowWidth - e.clientX - 200;
    var verticalPositions= windowHeight - e.clientY - 200;

    var horizontalPositions2 = windowWidth - e.clientX - 500;
    var verticalPositions2= windowHeight - e.clientY - 200;

    var horizontalPositionm = windowWidth - e.clientX - 400;
    var verticalPositionm= windowHeight - e.clientY - 50;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    SQUARE1.style.left = horizontalPositions + 'px';
    SQUARE1.style.top = verticalPositions + 'px';

    SQUARE2.style.left = horizontalPositions2 + 'px';
    SQUARE2.style.top = verticalPositions2 + 'px';

    MOON.style.left = horizontalPositionm + 'px';
    MOON.style.top = verticalPositionm + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";

    SQUARE1.style.backgroundColor = "blue";
    SQUARE1.style.borderColor = "blue";

    SQUARE2.style.backgroundColor = "blue";
    SQUARE2.style.borderColor = "blue";

    MOON.style.boxShadow  = "15px 60px 0px 0px red";

}


AREA.addEventListener('mousemove', mouseCoordinates, false);


CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
SQUARE1.addEventListener('mouseenter', changeColorOnTouch, false);
SQUARE2.addEventListener('mouseenter', changeColorOnTouch, false);
MOON.addEventListener('mouseenter', changeColorOnTouch, false);


CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
SQUARE1.addEventListener('mouseleave', function(){SQUARE1.removeAttribute("style");}, false);
SQUARE2.addEventListener('mouseleave', function(){SQUARE2.removeAttribute("style");}, false);
MOON.addEventListener('mouseleave', function(){MOON.removeAttribute("style");}, false);
