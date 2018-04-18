var datajson = document.getElementById('datajson');		//default animation

var datajsonc = bodymovin.loadAnimation({
  wrapper: datajson,
  animType: 'canvas',
  loop: false,
  path: 'animation/loading.json'
});

var ve = [];
var v = [];
var vc = [];

var NameArray = ["vertical8","vertical9"]

for (var i = 0; i < NameArray.length; i++) {
    ve[i] = document.getElementById(NameArray[i]);
    v[i] = {
    		container: ve[i],
    		renderer: 'svg',
    		loop: false,
    		prerender: false,
    		autoplay: false,
    		autoloadSegments: false,
    		path: "animation/" + NameArray[i] + ".json"
    };
    vc[i] = bodymovin.loadAnimation(v[i]);
}

function loopCompleteHandler(){
    vc[0].removeEventListener('loopComplete', loopCompleteHandler);
    vc[0].stop();
    vc[1].removeEventListener('loopComplete', loopCompleteHandler);
    vc[1].stop();
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

setTimeout(function(){
    loginbox.style.visibility = "visible";

    contact.style.visibility = "visible";
    contact.style.animationDuration = "0.5s";
    contact.style.animationName = "bounce";
    contact.style.animationFillMode = "forwards";

    image1.style.visibility = "visible";
},1250);
