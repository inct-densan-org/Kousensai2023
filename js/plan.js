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
})