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

var ArrayBrowser = [							["Itunes", "38.236%"],
												["Shazam", "22.435%"],
												["Soundcloud", "20.6645%"],
												["Spotify", "18.6645%"],
												["暫未有", "暫未有"]];

var ArrayDetail = [                             "iTunes是一款媒體播放器的應用程式，<br/>2001年1月10日由蘋果電腦在舊金山的Macworld Expo推出，<br/>用來播放以及管理數位音樂與視訊檔案，<br/>是最受歡迎的管理iPod與iOS設備檔案的主要工具之一。<br/>",
                                                "Shazam娛樂有限公司是一間英國應用開發公司，<br/>其開發之應用能根據取樣片段識別出對應的歌曲、<br/>電影、廣告和電視節目。<br/>該應用可支援Windows、macOS和智能手機。",
                                                "SoundCloud是一個線上音樂分享平臺，<br/>它允許人們合作、<br/>交流和分享原創音樂錄音，<br/>總部位於德國柏林。<br/>截至2013年7月，<br/>已擁有4000萬註冊用戶和200萬聽眾。",
                                                "Spotify是一個起源於瑞典的音樂串流服務，<br/>是全球最大的串流音樂服務商，<br/>提供包括Sony Music、EMI、Warner Music Group和<br/>Universal四大唱片公司及眾多獨立廠牌所授權、<br/>由數碼版權管理保護的音樂，<br/>使用用戶在2017年6月已經達到1.4億以上。",
                                                "暫未有"];
