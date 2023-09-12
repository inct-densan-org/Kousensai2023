$(function(){
    // let elem = document.getElementById("re2");
    // let rect = elem.getBoundingClientRect();
    // let rectheight=Math.round(rect.height);
    // $("#re2-img").css({"height":rectheight})
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
let ticking =true;
function fadein(target){
    let elem = document.getElementById(target);
    let targetid="#"+target;
    let rect = elem.getBoundingClientRect();
    let windowhight=window.innerHeight;
    let rectheight=Math.round(rect.height)/2;
    let rectbottom=Math.round(rect.bottom)-rectheight;
    if (0 < rectbottom&& rectbottom<= windowhight && ticking) {
        ticking = false;
        $(targetid).animate({opacity:1,top:0},1000,'swing');
    }
    if(rectbottom+rectheight<0||rectbottom-rectheight >= windowhight){
        ticking=true
        $(targetid).css({'opacity':'0',"top":"-200px"});
    }
}
document.addEventListener("scroll", (event) => {
//   fadein("re2");
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

