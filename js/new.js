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

var ArrayBrowser = [							["南華早報", "26.779%"],
												["Google news", "34.5768%"],
												["Fox news", "9.3221%"],
												["BBC news", "13.0001%"],
												["蘋果日報", "16.322%"]];

var ArrayDetail = [                             "《南華早報》和星期日出版的《星期日南華早報》<br/>是香港銷量最高的英語收費報紙。<br/>其主要對手為香港免費英文報章《英文虎報》、<br/>《亞洲華爾街日報》及《HKFP》。<br/>現時的總編輯為譚衛兒。",
                                                "Google新聞<br/>是Google開發的一款Web新聞聚合器，<br/>由Google首席工程師克里希納·巴拉特<br/>創造與領導開發。",
                                                "福斯新聞頻​​道<br/>是美國的一家有線電視新聞頻道，<br/>開播於1996年10月7日。",
                                                "BBC新聞是英國廣播公司<br/>旗下負責播報新聞節目的一個部門 。<br/> BBC新聞網在1997年11月上線，<br/>現在每月的訪問者數超過1500萬人，<br/>是英國最具人氣的新聞網站之一。<br/>",
                                                "《蘋果日報》<br/>為香港上市公司壹傳媒旗下繁體中文報紙，<br/>由大股東黎智英所創立，<br/>香港暢銷中文報章之一。"];
