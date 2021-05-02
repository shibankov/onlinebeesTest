/* eslint-disable */
$(document).ready(()=>{
    $(".sidebar__mob-row").click((event)=>{
        event.preventDefault();
        $(".sidebar").toggleClass("fade-in");
        //stop-scroll
        $(".overlay").toggleClass("fade-in-overlay");
        $("body").toggleClass("stop-scroll");
    });
    $(".sidebar-mob__close-icon").click((event)=>{
        event.preventDefault();
        $(".sidebar").toggleClass("fade-in");
        //stop-scroll
        $(".overlay").toggleClass("fade-in-overlay");
        $("body").toggleClass("stop-scroll");
    });
    $(".overlay").click((event)=>{
        event.preventDefault();
        $(".sidebar").toggleClass("fade-in");
        //stop-scroll
        $(".overlay").toggleClass("fade-in-overlay");
        $("body").toggleClass("stop-scroll");
    });
    $(".sidebar__row").click(function (event) {
        $(this).find(".sidebar__col-body").toggleClass('fade-in');
        $(this).find(".sidebar__col-title-arrow").toggleClass('rotate');
    });
});
//jquery-ui
$( function() {
    $( "#slider-range-price" ).slider({
        range: true,
        min: 0,
        max: 343342,
        values: [ 0, 343342],
        slide: function( event, ui ) {
            $( "#price-output" ).val( ui.values[ 0 ]);
            $( "#price-output2" ).val( ui.values[ 1 ]);
        }
    });
    $( "#price-output" ).val($( "#slider-range-price" ).slider( "values", 0 ));
    $( "#price-output2" ).val($( "#slider-range-price" ).slider( "values", 1 ));
} );
$( function() {
    $( "#slider-range-height" ).slider({
        range: true,
        min: 0,
        max: 240,
        values: [ 0, 240],
        slide: function( event, ui ) {
            $( "#height-output" ).val( ui.values[ 0 ]);
            $( "#height-output2" ).val( ui.values[ 1 ]);
        }
    });
    $( "#height-output" ).val($( "#slider-range-height" ).slider( "values", 0 ));
    $( "#height-output2" ).val($( "#slider-range-height" ).slider( "values", 1 ));
} );
$( function() {
    $( "#slider-range-length" ).slider({
        range: true,
        min: 400,
        max: 2000,
        values: [ 0, 2000],
        slide: function( event, ui ) {
            $( "#length-output" ).val( ui.values[ 0 ]);
            $( "#length-output2" ).val( ui.values[ 1 ]);
        }
    });
    $( "#length-output" ).val($( "#slider-range-length" ).slider( "values", 0 ));
    $( "#length-output2" ).val($( "#slider-range-length" ).slider( "values", 1 ));
} );
$('.ui-slider-handle').draggable();
