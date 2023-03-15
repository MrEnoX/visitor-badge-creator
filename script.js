function copymark() {
	var copyText = document.getElementById("markdown");
	var copybutton = document.getElementById("mardowncopy")
	
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	
    copybutton.innerText = 'Copied';
    setTimeout(function() {
      copybutton.innerText = 'Copy';
    }, 1500);
}

function copyhtml() {
	var copyText = document.getElementById("html");
	var copybutton = document.getElementById("htmlcopy")
	
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	
    copybutton.innerText = 'Copied';
    setTimeout(function() {
      copybutton.innerText = 'Copy';
    }, 1500);
}

function copyraw() {
	var copyText = document.getElementById("raw");
	var copybutton = document.getElementById("rawcopy")
	
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	
    copybutton.innerText = 'Copied';
    setTimeout(function() {
      copybutton.innerText = 'Copy';
    }, 1500);
}

function Main() {
	var sitev = document.getElementById("siteselect").value;
	var textv = document.getElementById("text").value.replace(/ /g, '%20');
	var urlv = document.getElementById("url").value.replace(/ /g, '%20');
	var pageidv = document.getElementById("pageid").value.replace(/ /g, '.');;
	var lcolorv = document.getElementById("lcolor").value.replace(/#/g, '%23');;
	var rcolorv = document.getElementById("rcolor").value.replace(/#/g, '%23');;
	
	var markdown = "[![" + textv + "](" + sitev + pageidv + "&left_text=" + textv + "&left_color=" + lcolorv+ "&right_color=" + rcolorv + ")]" + "(" + urlv + ")";
	var html = "<img src='" + sitev + pageidv + "&left_text=" + textv + "&left_color=" + lcolorv+ "&right_color=" + rcolorv+ "' alt='visitor badge'/>";
	var raw = sitev + pageidv + "&left_text=" + textv + "&left_color=" + lcolorv+ "&right_color=" + rcolorv;
	
	console.log(markdown);
	

	var textarea = document.getElementById("markdown");
	var htmlarea = document.getElementById("html");
	var rawarea = document.getElementById("raw")
	textarea.value = markdown;
	htmlarea.value = html;
	rawarea.value = raw;
	
}

setInterval(function() {
	Main()
}, 1);
