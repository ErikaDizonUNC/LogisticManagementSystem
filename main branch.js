// mainbranch.js

$(document).ready(function () {

    // Search Button Functionality
    $('.btnsrch').click(function () {
        var searchValue = $('.txtsrch').val();
        alert('Search functionality not implemented yet. You searched for: ' + searchValue);
    });

    // Slider Functionality
    var $slides = $('.slides');
    var count = 1;

    setInterval(function () {
        $slides.animate({ 'margin-left': '-=68vw' }, 1200, function () {
            count++;
            if (count === 4) {
                $slides.css("margin-left", 0);
                count = 1;
            }
        });
    }, 4000);

    // Categories Link Functionality
    $('.submenu').click(function () {
        var category = $(this).text().replace(/\s+/g, '').toLowerCase();
        alert('Redirecting to ' + category + ' page. Category functionality not implemented yet.');
        // Implement the actual redirection logic here
    });
});
