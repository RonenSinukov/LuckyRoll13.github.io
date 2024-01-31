$(document).ready(function() {
    // Toggle hover effect on click for touch devices
    $('.card').on('click', function() {
        $(this).toggleClass('hovered');
    });
});
