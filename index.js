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
        $(window).resize(function(){
            $pc_BurgerMenu.removeClass("active");
                $pc_BurgerIcon.removeClass("bi-x");
                $pc_BurgerIcon.addClass("bi-list");
          });
    })
})
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
let Isre2=false,Iskv=false,Islist=false,Ismap=false,Ispanhu=false;
Iskv= fadein("kv",!Iskv);

document.addEventListener("scroll", (event) => {
  Isre2= fadein("re2",!Isre2);
  burgurchange("sumaho_i");
  Iskv= fadein("kv",!Iskv);
  Islist= fadein("planlist",!Islist);
  Ismap= fadein("planmap",!Ismap);
  Ispanhu= fadein("panhuimg",!Ispanhu);

});
// ボタン要素を取得
let nextPageButton = document.getElementById("nextPageButton");

// ボタンがクリックされたときの処理を定義
nextPageButton.addEventListener("click", () => {
  // クエリパラメータを含むURLを生成
  const nextPageURL = "../plan.html?source=button"
  
  // 生成したURLに移動
  window.location.href = nextPageURL;
});
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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});
// 企画リストのコンポーネント化
class info extends HTMLElement { 
    constructor() {
      super();
    }
    connectedCallback(){
        // カスタム要素の中にシャドウDOMを接続する
      const shadow = this.attachShadow({ mode: 'open' });
      
      // HTMLファイルで指定された属性を取り出し、初期表示に使用する
      const day = this.getAttribute('day') || 'unknown';
      const genre = this.getAttribute('genre') || 'unknown';
      const text = this.getAttribute('text') || 'unknown';
  
      // (1) このカスタム要素の文書構造を定義する
      shadow.innerHTML = `
      <style>
      .info{
        display:flex ;
        justify-content: center;
        margin-top: 20px;
    }
    .info-genre{
        background-color: var(--sub-color);
        width: 125px;
        text-align: center;
        color: white;
        height: 36px;
    
    }
    
    .info-text{
        width: 480px;
        margin-left: 5%;
    }
    .day{
        width: 180px;
    }
    @media screen and (max-width: 992px){
        .info{
            display:flex ;
            justify-content:flex-start;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .info-genre{
            background-color: var(--sub-color);
            width: 90px;
            text-align: center;
            color: white;
            height: 24px;
            font-size: 16px;
            display:flex ;
            align-items: center;
            justify-content: center;
        }
        
        .info-text{
            width: 100%;
            margin-left: 0;
            font-size: 20px;
        }
        .day{
            width: 130px;
            font-size: 16px;
        }
        }
    }
      </style>
      <div class="info">
        <div class="day">${day}</div>
        <div class="info-genre">${genre}</div>
        <div class="info-text">${text}</div>
    </div>
      `;
}}customElements.define("info-element", info); 