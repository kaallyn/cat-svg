
var animationSmallMouth = document.getElementById("animation-small-mouth"),
    mouthPath = document.getElementById("mouth"),

    heartsButton = $('#hearts');

// button's value to svg function. Used for CSS animations
$("button.faceOption").click(function() {
    var firedBtnVal = $(this).val();
    // alert(firedBtnVal);
    // replace current class with that of the firedBtnVal
    $('svg').attr("class", firedBtnVal);
    
    $('svg').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    
        // code to execute after animation ends - removing the class that caused the animation. this allows same animation to be fired twice.
        $('svg').removeAttr('class');
    });
});

heartsButton.click(function() {
    animationSmallMouth.beginElement();
    // mouth.addEventListener('endEvent',animationEnd,false);
});

// function animationEnd() {
//    alert("bang!");
// }

