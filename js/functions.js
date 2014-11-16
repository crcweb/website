$(document).ready(function() {
    $('#navi a img')
        .mouseover(function() { 
            var src = $(this).attr("src").replace(".gif", "Over.gif");
            $(this).attr("src", src);
            
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("Over", "");
            $(this).attr("src", src);
        });
        
        $('input[type="image"]')
        .mouseover(function() { 
            var src = $(this).attr("src").replace(".png", "Over.png");
            $(this).attr("src", src);
            src = $(this).attr("src").replace(".gif", "Over.gif");
            $(this).attr("src", src);
            src = $(this).attr("src").replace(".jpg", "Over.jpg");
            $(this).attr("src", src);
            
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("Over", "");
            $(this).attr("src", src);
        });
        
        $('#newsletterInner input[type="text"]').blur( function() {
            if( $(this).val() == "") {
                    $(this).val('Enter email address');
                }
        });
        
        $('#email').blur( function() {
            if($(this).val() == "") {
                $(this).val('email address');
            }
        });
});