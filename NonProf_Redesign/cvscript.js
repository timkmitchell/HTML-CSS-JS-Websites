var prevScrollpos = window.pageYOffset;

function hidenavbar() {
	var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.flexDirection = "column";
			document.getElementById("navbar").style.gap = "0rem";
			document.getElementById("navsmedia").style.display = "flex";
			document.getElementById("navimg").style.width = "60%";
		}else{
			document.getElementById("navbar").style.flexDirection = "row";
			document.getElementById("navbar").style.gap = "1rem";
			document.getElementById("navsmedia").style.display = "none";
			document.getElementById("navimg").style.width = "45%";
		}
	prevScrollpos = currentScrollPos;
}

window.onscroll = function() {hidenavbar()};