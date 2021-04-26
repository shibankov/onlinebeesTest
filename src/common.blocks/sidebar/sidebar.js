/* eslint-disable */
$(document).ready(()=>{
    $(".sidebar__mob-row").click((event)=>{
        event.preventDefault();
        $(".sidebar").toggleClass("fade-in");
        //stop-scroll
        $("body").toggleClass("stop-scroll");
    });
    $(".sidebar-mob__close-icon").click((event)=>{
        event.preventDefault();
        $(".sidebar").toggleClass("fade-in");
        //stop-scroll
        $("body").toggleClass("stop-scroll");

    });
    $(".sidebar__row").click(function (event) {
        $(this).find(".sidebar__col-body").toggleClass('fade-in');
        $(this).find(".sidebar__col-title-arrow").toggleClass('rotate');
    });
});

