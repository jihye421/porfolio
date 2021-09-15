//store.js

$(document).ready(function(){

         $('.address>ul, .btn').click(function(c) {
             c.preventDefault();

                $(this).next().slideToggle(500)
                
                .parent().siblings().find('.address_sub').slideUp(500);
            });
});