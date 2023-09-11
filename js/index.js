$(function(){
    $("#header").each(function(){
        var $BurgerIcon=$(this).find("#sumaho_i");
        var $BurgerMenu=$(this).find("#sumaho_burger");
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
        var $pc_BurgerIcon=$(this).find("#pc_i");
        var $pc_BurgerMenu=$(this).find("#pc_burger");
        console.log($pc_BurgerMenu)
        $pc_BurgerIcon.on("click",function(){
            if($pc_BurgerMenu.hasClass("active")){
                $pc_BurgerMenu.removeClass("active");
                $pc_BurgerIcon.removeClass("bi-x");
                $pc_BurgerIcon.addClass("bi-list");
            }else{
                $pc_BurgerMenu.addClass("active");
                $pc_BurgerIcon.removeClass("bi-list");
                $pc_BurgerIcon.addClass("bi-x");
            }
        })
    })
})
