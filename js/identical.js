var tagging = -1;

function mouseOver(textnumber = 0)
{
    if(textnumber == tagging)
        return;

	bn.style.color = "#ffffff";
	setTimeout(function(){
		bn.style.color = "#000000";
		bn.style.textAlign = "left";
		bn.innerHTML = "<strong><p class=\"textoverflow\" style=\"animation-duration: 0.5s;animation-name: bounce;animation-fill-mode: forwards;margin-left: 50px;\">軟件名稱: \t" + ArrayBrowser[textnumber][0] + "<br/>投票此軟件的人數為: \t" + ArrayBrowser[textnumber][1] + "<br/> 介紹: \t" + ArrayDetail[textnumber] + "</p></strong>";
	},200);
    tagging = textnumber;
}

function UI_onClick(textnumber = -1)
{
    var opion = false;
	if(textnumber == -1)
		alert("You are not allow to upload any software(s) unless you are a verified member.");

	else
		opion = confirm("你確定要投票\"" + ArrayBrowser[textnumber][0] + "\"這個軟件?");

    if(opion)
		alert("系統繁忙, 請之後再試");
}

setTimeout(function(){
	bn.style.opacity = "1";
    commentbox.style.opacity = "1";

	btnborderout.style.left = "12.5%";
	btnborderout.style.top = "5%";
	btnborderout.style.width = "75%";
	btnborderout.style.height = "90%";

	UploadIconButton.style.visibility = "visible";
    CommentButton.style.visibility = "visible";
    setTimeout(function(){
    	link.style.visibility = "visible";
    	bn.style.visibility = "visible";
    	commentbox.style.visibility = "visible";
    },500);
},1000);
