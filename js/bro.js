var datajsonc = bodymovin.loadAnimation({
  wrapper: document.getElementById('datajson'),
  animType: 'canvas',
  loop: false,
  path: 'animation/loading.json'
});

var ve = [];
var vc = [];

var NameArray = ["vertical8","vertical9"]

for (var i = 0; i < NameArray.length; i++) {
    ve[i] = document.getElementById(NameArray[i]);
    vc[i] = bodymovin.loadAnimation({
    		container: ve[i],
    		renderer: 'svg',
    		loop: false,
    		prerender: false,
    		autoplay: false,
    		autoloadSegments: false,
    		path: "animation/" + NameArray[i] + ".json"
    });
}

function loopCompleteHandler(){
    for(i = 0; i < NameArray.length; i++)
    {
        vc[i].removeEventListener('loopComplete', loopCompleteHandler);
        vc[i].stop();
    }
}

for(i = 0; i < NameArray.length; i++)
{
    if(i == 0)
        outsidehandler(document.getElementById("leftborder"), vc[i]);
    else if(i == 1)
        outsidehandler(document.getElementById("rightborder"), vc[i]);
}

function outsidehandler(vc1, vc2)
{
    vc1.addEventListener("mouseenter", function(){
        vc2.removeEventListener('loopComplete', loopCompleteHandler);
        vc2.goToAndStop(1);
        vc2.playSegments([29, 60], true);
    })
    vc1.addEventListener("mouseleave", function(){
        vc2.addEventListener('loopComplete', loopCompleteHandler);
        vc2.goToAndStop(61);
        vc2.playSegments([61, 120], true);
    })
}

var ArrayBrowser = [							["Google Chrome", "56.779%"],
												["Mozilla Firefox", "34.5768%"],
												["Microsoft Internet Explorer", "4.3221%"],
												["Opera", "3.322%"],
												["Safari", "1.0001%"]];

var ArrayDetail = [                             "Google Chrome是由Google開發的免費網頁瀏覽器。<br/>\Chrome是化學元素「鉻」的英文名稱，<br/>過去也用Chrome稱呼瀏覽器的外框。<br/>Chrome相应的開放原始碼計劃名為Chromium，<br/>因此Google Chrome本身是非自由軟體，未開放原始碼。<br/>",
                                                "Mozilla Firefox（簡稱Firefox），<br/>中文俗稱火狐，<br/>是一個自由及開放原始碼的網頁瀏覽器，<br/>由Mozilla基金會及其子公司Mozilla公司開發。<br/>",
                                                "Internet Explorer，<br/>是微軟所開發的圖形使用者介面網頁瀏覽器。<br/>自從 1995 年開始，<br/>內建在各個新版本的Windows作業系统作為預設的瀏覽器，<br/>也是微軟Windows作業系統的一個組成部分。<br/>",
                                                "Opera是由Opera軟體公司所開發的網頁瀏覽器。<br/>最新版本可用於Microsoft Windows、OS X和Linux作業系統，<br/>並使用Blink排版引擎。<br/>而早期版本則使用Presto排版引擎。",
                                                "Safari是蘋果公司所開發，<br/>並內建於macOS（前稱OS X、Mac OS X）的網頁瀏覽器。<br/>Safari在2003年1月7日首度發行測試版，<br/>並從Mac OS X Panther開始成為Mac OS X的預設瀏覽器，<br/>也是iOS內建的預設瀏覽器。<br/>Windows版本的首個測試版在2007年6月11日推出"];
