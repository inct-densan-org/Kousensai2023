$(function(){
    $("#change_screen").each(function(){
        var $tabList =$(this).find(".tabs-nav"),
            $tavAnchors=$tabList.find("a"),
            $tabpannel=$(this).find(".pannel");
        $tabList.on("click","a",function(event){
            event.preventDefault();
            var $this=$(this);
            if($this.hasClass("active")){
                return;
            }
            $tavAnchors.removeClass("active");
            $tavAnchors.closest(".NAV").removeClass("active");
            $this.addClass("active");
            $this.closest(".NAV").addClass("active");
            $tabpannel.hide();
            $($this.attr("href")).show();
        })
        $tavAnchors.eq(0).trigger("click");
        
    })
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
})