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

var ArrayBrowser = [							["Facebook", "33.779%"],
												["Flickr", "34.5768%"],
												["Google+", "4.3221%"],
												["Instagram", "26.322%"],
												["Twitter", "1.0001%"]];

var ArrayDetail = [                             "Facebook（原本稱作thefacebook）<br/>是一家位於美國加州聖馬特奧縣門洛帕克市的<br/>線上社交網絡服務網站。<br/>其名稱的靈感來自美國高中<br/>提供給學生包含照片<br/>和聯絡資料的通訊錄暱稱「face book」。",
                                                "Flickr為一家提供免費及付費數位照片儲存、<br/>分享方案之線上服務，<br/>也有提供網路社群平台。<br/>一般認為Flickr是Web 2.0應用方式的絕佳例子。",
                                                "Google+（Google Plus，簡稱：G+或GPlus）<br/>是Google公司推出的社交網站與身份服務；<br/>除社交網站身份外，<br/>Google也將Google+視為其旗下眾多服務之間社交層面的補強，<br/>與傳統社交網站僅能登入單一網站的概念不同。",
                                                "Instagram是一款免費提供在線圖片<br/>及視頻分享的社交應用軟件，<br/>於2010年10月發布。<br/>它可以讓用戶用智能手機拍下照片後再將不同的濾鏡效果添加到照片上，<br/> 然後分享到Facebook、Twitter、<br/>Tumblr及Flickr等社交網絡服務、<br/>或是Instagram的服務器上。",
                                                "Twitter是一個社交網絡與微博客服務，<br/>它可以讓用戶更新不超過140個字符的消息，<br/>這些消息也被稱作“推文（Tweet）”。<br/>這個服務是由傑克·多西在2006年3月創辦並在當年7月啟動的。 <br/>Twitter風行於全世界多個國家，<br/>是互聯網上訪問量最大的十個網站之一。<br/>"];
