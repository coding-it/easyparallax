$(function()
{
    if($("div#easy-parallax").length > 0)
    {
        $("div#easy-parallax").each(function()
        {
            $(this).children('*').wrapAll("<section></section>"); 
        });
    }
    
    $.fn.startParallax = function(dataSpeed) 
    {
        if(dataSpeed == null)
        {
            dataSpeed = 2;
        }
        
        return $(this).each(function()
        {
            var parallaxObj = $(this);
            
            $(window).scroll(function() 
            {
                console.log(dataSpeed);
                var yPos = -($(window).scrollTop() / dataSpeed);
                var coords = '50%' + yPos + 'px';
                parallaxObj.css({ backgroundPosition: coords });
            });
        });
    }
});