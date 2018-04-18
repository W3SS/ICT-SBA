var datajson = document.getElementById('datajson');
var datajsonc = bodymovin.loadAnimation({
  wrapper: datajson,
  animType: 'canvas',
  loop: false,
  path: 'animation/data.json'
});

var vertical1 = document.getElementById('vertical1');
var v1 = {
		container: vertical1,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical1.json'
};
var v1c = bodymovin.loadAnimation(v1);


var vertical2 = document.getElementById('vertical2');
var v2 = {
		container: vertical2,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical2.json'
};
var v2c = bodymovin.loadAnimation(v2);

var vertical3 = document.getElementById('vertical3');
var v3 = {
		container: vertical3,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical3.json'
};
var v3c = bodymovin.loadAnimation(v3);

var vertical4 = document.getElementById('vertical4');
var v4 = {
		container: vertical4,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical4.json'
};
var v4c = bodymovin.loadAnimation(v4);

var vertical5 = document.getElementById('vertical5');
var v5 = {
		container: vertical5,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical5.json'
};
var v5c = bodymovin.loadAnimation(v5);

var vertical6 = document.getElementById('vertical6');
var v6 = {
		container: vertical6,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical6.json'
};
var v6c = bodymovin.loadAnimation(v6);

var vertical7 = document.getElementById('vertical7');
var v7 = {
		container: vertical7,
		renderer: 'svg',
		loop: false,
		prerender: false,
		autoplay: false,
		autoloadSegments: false,
		path: 'animation/vertical7.json'
};
var v7c = bodymovin.loadAnimation(v7);

function loopCompleteHandler(){
    v1c.removeEventListener('loopComplete', loopCompleteHandler);
    v1c.stop();
    v2c.removeEventListener('loopComplete', loopCompleteHandler);
    v2c.stop();
    v3c.removeEventListener('loopComplete', loopCompleteHandler);
    v3c.stop();
    v4c.removeEventListener('loopComplete', loopCompleteHandler);
    v4c.stop();
    v5c.removeEventListener('loopComplete', loopCompleteHandler);
    v5c.stop();
    v6c.removeEventListener('loopComplete', loopCompleteHandler);
    v6c.stop();
    v7c.removeEventListener('loopComplete', loopCompleteHandler);
    v7c.stop();
}

setTimeout(function(){
link.style.visibility = "visible";
},5750);
setTimeout(function(){
	btnborderout.style.left = "7.5%";
	btnborderout.style.top = "5%";
	btnborderout.style.width = "85%";
	btnborderout.style.height = "90%";
},5250);

vertical1.addEventListener('mouseenter', function(){
    v1c.removeEventListener('loopComplete', loopCompleteHandler);
    v1c.goToAndStop(1);
	v1c.playSegments([0, 60], true);
})

vertical2.addEventListener('mouseenter', function(){
    v2c.removeEventListener('loopComplete', loopCompleteHandler);
    v2c.goToAndStop(1);
	v2c.playSegments([0, 60], true);
})

vertical3.addEventListener('mouseenter', function(){
    v3c.removeEventListener('loopComplete', loopCompleteHandler);
    v3c.goToAndStop(1);
	v3c.playSegments([0, 60], true);
})

vertical4.addEventListener('mouseenter', function(){
    v4c.removeEventListener('loopComplete', loopCompleteHandler);
    v4c.goToAndStop(1);
	v4c.playSegments([0, 60], true);
})

vertical5.addEventListener('mouseenter', function(){
    v5c.removeEventListener('loopComplete', loopCompleteHandler);
    v5c.goToAndStop(1);
	v5c.playSegments([0, 60], true);
})

vertical6.addEventListener('mouseenter', function(){
    v6c.removeEventListener('loopComplete', loopCompleteHandler);
    v6c.goToAndStop(1);
	v6c.playSegments([0, 60], true);
})

vertical7.addEventListener('mouseenter', function(){
    v7c.removeEventListener('loopComplete', loopCompleteHandler);
    v7c.goToAndStop(1);
	v7c.playSegments([0, 60], true);
})

vertical1.addEventListener('mouseleave', function(){
    v1c.addEventListener('loopComplete', loopCompleteHandler);
	v1c.goToAndStop(61);
	v1c.playSegments([61, 120], true);
})

vertical2.addEventListener('mouseleave', function(){
    v2c.addEventListener('loopComplete', loopCompleteHandler);
	v2c.goToAndStop(61);
	v2c.playSegments([61, 120], true);
})

vertical3.addEventListener('mouseleave', function(){
    v3c.addEventListener('loopComplete', loopCompleteHandler);
	v3c.goToAndStop(61);
	v3c.playSegments([61, 120], true);
})

vertical4.addEventListener('mouseleave', function(){
    v4c.addEventListener('loopComplete', loopCompleteHandler);
	v4c.goToAndStop(61);
	v4c.playSegments([61, 120], true);
})

vertical5.addEventListener('mouseleave', function(){
    v5c.addEventListener('loopComplete', loopCompleteHandler);
	v5c.goToAndStop(61);
	v5c.playSegments([61, 120], true);
})

vertical6.addEventListener('mouseleave', function(){
    v6c.addEventListener('loopComplete', loopCompleteHandler);
	v6c.goToAndStop(61);
	v6c.playSegments([61, 120], true);
})

vertical7.addEventListener('mouseleave', function(){
    v7c.addEventListener('loopComplete', loopCompleteHandler);
	v7c.goToAndStop(61);
	v7c.playSegments([61, 120], true);
})