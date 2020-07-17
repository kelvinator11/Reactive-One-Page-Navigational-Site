
/**
 * 
 * 
 * 
 * This Entire JavaScript code is used for the one-page 
 * navigation scroll effect.
 * 
 * 
 * 
 */




$(document).ready(function(){
    
    // Page scrolling function for the nav-links
    $(".nav-link, .nav-logo").click(function(){
        $('html,body').animate({ scrollTop: $(this.hash).offset().top-80 }, 1400);
        return false;
    });
    
    // Back to Top Link
    $(".top-link").click(function(){
        $('html,body').animate({ scrollTop: $("#topSection").offset().top }, 2000);
        return false;
    });
    
    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 110) ? (
            $('.nav-bar').addClass('scrolled')
        ) : (
            $('.nav-bar').removeClass('scrolled')
        );
    });

    
    // Setting the active nav-link based on the scrolled page position

    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#contactSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#contactLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#priceSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#priceLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#servicesSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#servicesLink').addClass('active');
        
        } else if ($(window).scrollTop() >= $('#aboutSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#aboutLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#topLink').addClass('active');
        }
    });
    
}
);