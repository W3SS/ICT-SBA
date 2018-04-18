var buttonEl= document.getElementById('file');
var animData = {
    wrapper: buttonEl,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'animation/file.json'
};
var anim = file.loadAnimation(animData);
function loopCompleteHandler(){
    anim.removeEventListener('loopComplete', loopCompleteHandler);
    anim.stop();
}
buttonEl.addEventListener('mouseover', function(){
    anim.removeEventListener('loopComplete', loopCompleteHandler);
    anim.goToAndStop(1);
    anim.play();
})
buttonEl.addEventListener('mouseout', function(){
    anim.addEventListener('loopComplete', loopCompleteHandler);
})