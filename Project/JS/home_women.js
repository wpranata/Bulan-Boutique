$(document).ready(function() {

    var currentImageIndex = 0;
    var imageLength = 4;

    var autoSliderInterval;

    startInterval();

    for (let i = 1; i <= imageLength; i++) {
        $("#women_dot_" + i).bind('click', function() {
            stopInterval();
            currentImageIndex = i - 1;
            move_slider_images(currentImageIndex, 0.2);
            set_dots_background("women_dot_" + i);
            startInterval();
        });
    }

    $("#women_arrow_left").bind('click', function() {
        stopInterval();
        move_slider_images(--currentImageIndex, 0.2);
        setTimeout(validate_image_index, 150);
        startInterval();

    });

    $("#women_arrow_right").bind('click', function() {
        stopInterval();
        move_slider_images(++currentImageIndex, 0.2);
        setTimeout(validate_image_index, 150);
        startInterval();
    });

    function move_slider_images(imageIndex, transition) {
        $(".women_slider_images img").css({
            "transition": transition + "s",
            "transform": "translateX(" + ((imageIndex + 1) * -100) + "%)"
        });
    }

    function validate_image_index() {
        if (currentImageIndex < 0) // too left
        {
            currentImageIndex = imageLength - 1;
            move_slider_images(currentImageIndex, 0);
        }

        if (currentImageIndex >= imageLength) { // too right
            currentImageIndex = 0;
            move_slider_images(currentImageIndex, 0);
        }
        set_dots_background("women_dot_" + (currentImageIndex + 1));
    }

    function startInterval() {
        autoSliderInterval = setInterval(function() {
            move_slider_images(++currentImageIndex, 0.2);
            setTimeout(validate_image_index, 150);
        }, 5000);
    }

    function stopInterval() {
        clearInterval(autoSliderInterval);
    }

    function set_dots_background(dotID) {
        $(".women_dot").css({
            "background-color": "rgba(0, 0, 0, 0.3)"
        });

        $("#" + dotID).css({
            "background-color": "rgba(0, 0, 0, 0.9)"
        });
    }
});