setInterval(function() {
  $(".buckethat").css("transform", "rotate(" + Math.random() *360 + "deg)");
}, 200);

// random bopping around the page

setInterval(function() {
  $(".coconut2").css("transform", "rotate(" + Math.random() *360 + "deg)");
}, 200);


// play music

var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 

// full screen mode

addEventListener("click", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});


// animate the surfboard


$(function() {
    var img = $("#plane"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

    function animatePlane() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animatePlane);
    }

    animatePlane();
});

