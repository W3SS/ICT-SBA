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

var ArrayBrowser = [							["Google Translate", "84.9684"],
												["Oxford Dictionary", "15.0316"],
												["暫未有", "暫未有"],
												["暫未有", "暫未有"],
												["暫未有", "暫未有"]];

var ArrayDetail = [                             "Google翻譯（英语：Google Translate）<br/>是一項Google提供的翻譯文段及網頁的服務。",
                                                "《牛津英語詞典》（英語：Oxford English Dictionary，OED）<br/>是由牛津大學出版社出版的20卷詞典，<br/>被視為最全面和權威的英語詞典。<br/>不少對英語詞彙的學術研究都以牛津詞典作為切入點。<br/>而詞典對詞彙拼法的要求，<br/>影響了不同地區的書面英語。",
                                                "暫未有",
                                                "暫未有",
                                                "暫未有"];
