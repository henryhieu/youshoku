jQuery(window).load(function() {
    jQuery('.home-slider').flexslider({
        animation: "slide",
        start: function(slider) {
            jQuery('body').removeClass('loading');
        }
    });

});

//tab
$(document).ready(function() {
    $('.tab-menu li a').click(function() {
        var tab_id = $(this).attr('data-t');
        $('tab-menu li a').removeClass('active');
        $('tab').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })
})

// scroll
jQuery(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        });
        //クリックしたら、scroll
        $('.scrolltop').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    })
    //menu mobile
jQuery(function() {
    //hanbager animation
    var toggles = document.querySelectorAll(".toggle");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
            // show menu
            if ($('.main-menu').hasClass('menu-show')) {
                $('.main-menu').removeClass('menu-show');
            } else {
                $('.main-menu').addClass('menu-show');
            }
        });
    }
});
//

$(function() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('.yr-main-nav li a').each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
    })
});
