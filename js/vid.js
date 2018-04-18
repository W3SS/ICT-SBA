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

var ArrayBrowser = [							["Bilibili", "56.779%"],
												["Netflix", "34.5768%"],
												["Niconico", "4.3221%"],
												["Twitch", "3.322%"],
												["Youtube", "1.0001%"]];

var ArrayDetail = [                             "bilibili，<br/>正式備案名稱為嗶哩嗶哩彈幕網，<br/>也被稱為嗶哩嗶哩，<br/>bilibili彈幕網，<br/>或簡稱為乙站，<br/>是中國一個ACG相關的彈幕視頻分享網站，<br/>其前身為視頻分享網站Mikufans。",
                                                "Netflix，<br/>是一間在世界多國提供網路視頻點播的公司，<br/>並同時在美國經營單一費率郵寄DVD出租服務。<br/>該服務是使用回郵信封寄送DVD和Blu-ray出租光碟片至消費者指定的收件地址。",
                                                "niconico動畫<br/>是日本Dwango公司的子公司Niwango所贊助提供的線上弹幕影片分享網站，<br/>常被簡稱為niconico或nico等，<br/>其中「niconico」在日文中為微笑之意；<br/>動画在日文中則為「影片」的意思。",
                                                "Twitch<br/>是遊戲軟體影音串流平台，<br/>從Justin.tv分割成立。<br/>提供平台供遊戲玩家進行遊戲過程的實況，<br/>或供遊戲賽事的轉播。<br/>也提供聊天室，<br/>讓觀眾間進行簡單的互動。",
                                                "YouTube<br/>是源自美國的影片分享網站，<br/>讓使用者上載、觀看及分享及評論影片。<br/>公司於2005年2月15日註冊，<br/>網站的口號為「Broadcast Yourself」，<br/>網站的標誌意念來自早期電視顯示器"];
