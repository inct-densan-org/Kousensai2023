$(function(){
    $("#header").each(function(){
        var $BurgerIcon=$(this).find("i");
        var $BurgerMenu=$(this).find(".burger");
        $BurgerIcon.on("click",function(){
            if($BurgerMenu.hasClass("active")){
                $BurgerMenu.removeClass("active");
                $BurgerIcon.removeClass("bi-x");
                $BurgerIcon.addClass("bi-list");
            }else{
                $BurgerMenu.addClass("active");
                $BurgerIcon.removeClass("bi-list");
                $BurgerIcon.addClass("bi-x");
            }
        })
    })
})
