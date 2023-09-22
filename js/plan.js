   // スムーズスクロールの関数を定義
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// ページ内リンクがクリックされたときにスムーズスクロールを実行
document.querySelectorAll('area[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        console.log(targetId);
        if(targetId=="gd"){
            showmap();
            smoothScroll("media");
        }else{
            smoothScroll(targetId);
        }
        
    });
});
function showlist(){
    $("#list-button").addClass("active");
    $("#list-button").closest(".NAV").addClass("active");
    $("#map-button").removeClass("active");
    $("#map-button").closest(".NAV").removeClass("active");
    $("#map").hide();
    $("#list").show();
}
function showmap(){
    $("#map-button").addClass("active");
    $("#map-button").closest(".NAV").addClass("active");
    $("#list-button").removeClass("active");
    $("#list-button").closest(".NAV").removeClass("active");
    $("#list").hide();
    $("#map").show();
}
$(function(){
    $("#map-button").on("click",function(){
        showmap()
    })
    $("#list-button").on("click",function(){
        showlist()
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
        showlist()
      // ここにボタンからアクセスされた場合の特別な処理を追加
    } else {
        showmap()
      console.log("通常のリンクからアクセスされました。");
      // 通常のリンクからアクセスされた場合の処理を追加
    }
  });
