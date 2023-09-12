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

window.addEventListener("load", () => {
    // 現在のURLからクエリパラメータを取得
    const queryParams = new URLSearchParams(window.location.search);
    
    // "source"パラメータの値を取得
    const source = queryParams.get("source");
    
    // "source"パラメータが "button" の場合、ボタンからアクセスされたことを示す処理を追加
    if (source === "button") {
        $("#list-button").addClass("active");
        $("#list-button").closest(".NAV").addClass("active");
        $("#map-button").removeClass("active");
        $("#map-button").closest(".NAV").removeClass("active");
        $("#map").hide();
        $("#list").show();
      // ここにボタンからアクセスされた場合の特別な処理を追加
    } else {
      console.log("通常のリンクからアクセスされました。");
      // 通常のリンクからアクセスされた場合の処理を追加
    }
  });