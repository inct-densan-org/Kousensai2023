$(function(){
    $("#header").each(function(){
        var $BurgerIcon=$(this).find("#sumaho_i");
        var $BurgerMenu=$(this).find("#sumaho_burger");
        
        
        $BurgerIcon.on("click",function(){
            if($BurgerMenu.hasClass("active")){
                $BurgerMenu.removeClass("active");
                $BurgerIcon.removeClass("active");
                $BurgerIcon.removeClass("bi-x");
                $BurgerIcon.addClass("bi-list");
                $('body').css('overflow', 'auto');
            }else{
                $BurgerMenu.addClass("active");
                $BurgerIcon.addClass("active");
                $BurgerIcon.removeClass("bi-list");
                $BurgerIcon.addClass("bi-x");
                $('body').css('overflow', 'hidden');
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
            $(window).resize(function(){
                $pc_BurgerMenu.removeClass("active");
                    $pc_BurgerIcon.removeClass("bi-x");
                    $pc_BurgerIcon.addClass("bi-list");
              });
        })
    })
})

function fadein(target,ticking){
    let elem = document.getElementById(target);
    let targetid="#"+target;
    let rect = elem.getBoundingClientRect();
    let windowhight=window.innerHeight;
    let rectheight=Math.round(rect.height)/2;
    let rectbottom=Math.round(rect.bottom)-rectheight;
    if (0 < rectbottom&& rectbottom<= windowhight && ticking) {
        
        $(targetid).animate({opacity:1},1000,'swing');
        return true;
    }

}
function burgurchange(target){
    let targetid="#"+target;
    let windowhight=window.innerHeight;
    let scrolltop=$(window).scrollTop();
    
    if ( scrolltop<= windowhight ) {
        $(targetid).removeClass("active2");
    } else{
        $(targetid).addClass("active2");
    }

}
let Isre2=false,Iskv=false,Islist=false,Ismap=false,Ispanhu=false;
Iskv= fadein("kv",!Iskv);
document.addEventListener("scroll", (event) => {
    burgurchange("sumaho_i");
  Isre2= fadein("re2",!Isre2);
  Iskv= fadein("kv",!Iskv);
  Islist= fadein("planlist",!Islist);
  Ismap= fadein("planmap",!Ismap);
  Ispanhu= fadein("panhuimg",!Ispanhu);
  

});
// ボタン要素を取得
let nextPageButton = document.getElementById("nextPageButton");
console.log(nextPageButton);
// ボタンがクリックされたときの処理を定義
nextPageButton.addEventListener("click", () => {
  // クエリパラメータを含むURLを生成
  const nextPageURL = "../plan.html?source=button";
  
  // 生成したURLに移動
  window.location.href = nextPageURL;
});

