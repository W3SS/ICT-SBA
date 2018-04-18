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

var ArrayBrowser = [							["Discord", "21.523%"],
												["Whatsapp", "53.323%"],
												["Steam", "13.154%"],
												["Skype", "6.353%"],
												["QQ", "5.647%"]];

var ArrayDetail = [                             "Discord是一種閉源免費實時通話軟件，<br/>初始版本開發於2015年3月，<br/>主要用於遊戲玩家，<br/>這款軟件可以在Microsoft Windows、<br/>macOS、Android、iOS、Linux和網頁上運行。",
                                                "WhatsApp Messenger，簡稱WhatsApp ，<br/>是一款用於智能手機的跨平台加密即時通訊應用程式。<br/>該軟體透過互聯網進行語音通話及影像通話，<br/>並使用標準行動網路電話號碼<br/>向其他用戶發送簡訊、<br/>文件檔、PDF文件、圖片、<br/>影片、音樂、聯絡人資訊、<br/>用戶位置及錄音檔等。",
                                                "Steam是美國電子遊戲商威爾烏<br/>於2003年9月12日推出的數位發行平台，<br/>提供數字版權管理，多人遊戲，流媒體和社交網絡服務等功能。<br/>借助Steam，用戶能安裝並自動更新遊戲，<br/>也可以使用包括好友列表和組在內的社區功能，<br/>還能使用雲存儲，遊戲內語音和聊天功能。",
                                                "Skype是一款通信應用軟件，<br/>可通過網際網路為電腦、<br/>平板電腦和移動設備提供與<br/>其他聯網設備或傳統電話/<br/>智能手機間進行視頻通話和語音通話的服務。<br/>使用者也可通過Skype收發即時通信信息，<br/>傳輸文件，收發多媒體信息，進行視象會議。",
                                                "騰訊QQ，<br/>是騰訊公司於1999年2月11日推出的一款的多平台即時通信軟件，<br/>從支持文字、語音和視頻聊天，發展到帶有文件共享、<br/>網絡硬盤、郵箱、遊戲、論壇，甚至是網購、<br/>租房與找工作等等廣泛服務的平台。"];
