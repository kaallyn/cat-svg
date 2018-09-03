

// button's value to svg function
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

    // remove all classes to #container
    // $('#container').removeAttr('class');
    // add class named button's blue to #container
    // $('#container').addClass(firedBtnVal+'Bg');
    
});


