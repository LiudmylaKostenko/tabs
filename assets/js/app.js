(function($) {
    $(document).ready(function() {
        $('.tab_item').click(function() {
            if (!$(this).hasClass('active')) {
                var i = $(this).index();
                $('.tab_item').removeClass('active');
                $('.tabs_wrapper .active').hide().removeClass('active');
                $(this).addClass('active');
                $($('.tabs_wrapper').children('.tabs_content')[i]).fadeIn(1000).addClass('active');
            }
        });
    });
})(jQuery);

let circle = document.querySelector('.circle');
let length = circle.getTotalLength();

let text = document.querySelector('.percentage');
let percentage = text.innerHTML;
percentage = percentage.replace(' %', '');
percentage = parseInt(percentage);
setPercentage(percentage);

function setPercentage(percentage) {
    percentage = 100 - percentage;
    let new_length = (length / 100) * percentage
    circle.style['stroke-dashoffset'] = new_length;
}