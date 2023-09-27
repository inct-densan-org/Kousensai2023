   // スムーズスクロールの関数を定義
   const targetElement = document.getElementById("yatai");
   console.log(targetElement.offsetTop+targetElement.offsetHeight)
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
$('img[usemap]').rwdImageMaps();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        console.log(targetId)
        var firstChar = targetId.charAt(0); // 最初の文字を取得
        if(firstChar=="n"){
            showmap();
            smoothScroll(targetId);
        }else if(firstChar=="m"){
            showlist();
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
                $("body").css("overflow","auto");
                
            }else{
                $BurgerMenu.addClass("active");
                $BurgerIcon.removeClass("bi-list");
                $BurgerIcon.addClass("bi-x");
                $("body").css("overflow", "hidden");
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


// 企画リストのコンポーネント化
  class plan_list extends HTMLElement { 
    constructor() {
      super();
    }
    connectedCallback(){
        // カスタム要素の中にシャドウDOMを接続する
      const shadow = this.attachShadow({ mode: 'open' });
      
      // HTMLファイルで指定された属性を取り出し、初期表示に使用する
      const imgurl = this.getAttribute('imgurl') || 'unknown';
      const genre = this.getAttribute('genre') || 'unknown';
      const headline = this.getAttribute('headline') || 'unknown';
      const text = this.getAttribute('text') || 'unknown';
      const place = this.getAttribute('place') || 'unknown';
      const href = this.getAttribute('href') || 'unknown';
  
      // (1) このカスタム要素の文書構造を定義する
      shadow.innerHTML = `
      <style>
      .list_content{
        width: 350px;
        margin: 60px 15px 0;
        height: 560px;
        position: relative;
    }
    .list_content h1{
        color: var(--footer-color-deep);
        font-size: 1.6rem;
        margin: 0;
        font-weight: bold;
    }
    .list_img{
        border-radius: 10px;
        width: 100%;
        height: 0;
        padding: 62.69% 0 0;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 20px;
        max-height: 280px;
    }
    .list_genre{
        background-color: var(--footer-color-deep);
        color: white;
        text-align: center;
        padding: 1% 3%;
        font-size: large;
        margin-right: 10px;
        display: inline-block;
    }
    .list_content h3{
        margin-top: 2%;
        font-size: large;
        font-weight: normal;
        line-height: 1.2;
        color: var(--para-color);
    }
    .list_content p{
        color: var(--acsent-color);
        font-size: 1.1rem;
    }
    .list_button{
        position: absolute;
        display: inline-block;
        padding: 15px 30px;
        background-color: white;
        border: var(--footer-color-deep) 2px solid;
        color: var(--footer-color-deep);
        text-align: center;
        border-radius: 60px;
        margin: auto;
        margin-top: auto;
        max-width: 340px;
        font-weight: 700;
        bottom: 0;
        left: 70px;
    }
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 768px){
        .list_content{
                width: 350px;
            }
        }
    }
      </style>
      <div class="list_content" >
        <div  style="background-image: url(${imgurl});" class="list_img"></div>
            <div class="d-flex">
                <div class="list_genre">${genre}</div>
            </div>
            <h1>${headline}</h1>
            
            <h3>${text}</h3>
            <p>${place}</p>
            <div style="width: 100%; text-align: center;"><a href="${href}" class="list_button" id="button">マップで確認　→</a></div>
        </div>
     </div>
      `;
      const myElement = shadow.getElementById('button');
        myElement.addEventListener('click', function(e)  {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            console.log(targetId +"!!!");
            const targetLi = document.getElementById(targetId);
            // すべての<ol>要素を取得
            const allOlElements = document.querySelectorAll("ol");

            // すべての<ol>要素に対して処理を行うループ
            allOlElements.forEach((ol) => {
            // <ol>要素の下にあるすべての<li>要素を取得
            const liElements = ol.querySelectorAll("li");

            // すべての<li>要素からactiveクラスを削除
                liElements.forEach((li) => {
                    li.classList.remove("active");
                });
            });
            // 最初に取得した<li>要素にactiveクラスを追加
            targetLi.classList.add("active");
            var substring = targetId.substring(1);
            var subint=parseInt(substring)
            var firstChar = targetId.charAt(0); // 最初の文字を取得
            
            if(firstChar=="n"){
                showmap();
                if(subint<=15){
                    smoothScroll("outside");
                }else if(20<=subint&&subint<23||subint==29){
                    smoothScroll("senkouka1")
                }else if(subint==25||subint==292){
                    smoothScroll("senkouka2")
                }else if(17==subint||subint==18||subint==28||subint==32){
                    smoothScroll("kyouikuka1")
                }else if(subint==16||subint==29||subint==27||subint==31){
                    smoothScroll("kyouikuka2")
                }else if(23==subint||subint==24||subint==26||subint==30){
                    smoothScroll("kyouikuka3")
                }
            }else if(firstChar=="m"){
                showlist();
                smoothScroll(targetId);
            }
        })  ;
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
    function Onactive(targetid) {
        targetid.addClass("active")
      }
      function Offactive(targetid) {
        targetid.removeClass("active")
      }
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        console.log(targetId)
        console.log(targetElement.offsetTop+targetElement.offsetHeight)
        if(window.innerWidth<900){
            if (targetId=="outside") {
                window.scrollTo({
                    top: targetElement.offsetTop+targetElement.offsetHeight/2,
                    behavior: 'smooth'
                });}else{
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
        }else{
            if (targetId=="outside") {
                window.scrollTo({
                    top: targetElement.offsetTop+targetElement.offsetHeight,
                    behavior: 'smooth'
                });
            }else{
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        
    }
    }
      
}
  customElements.define("plan-list", plan_list); 