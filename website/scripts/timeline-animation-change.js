const timelineText = document.getElementsByClassName("caption__wrapper");

checkForSmallScreen();
window.addEventListener("resize", checkForSmallScreen);

function checkForSmallScreen() {
	if (window.matchMedia("(width < 48em)").matches) {
		for (let i = 0; i < timelineText.length; i++) {
			const element = timelineText[i];

			element.classList.remove("stationary-slide-right-slow");
			element.classList.add("stationary-slide-down");
		}
	} else {
		for (let i = 0; i < timelineText.length; i++) {
			const element = timelineText[i];

			element.classList.add("stationary-slide-right-slow");
			element.classList.remove("stationary-slide-down");
		}
	}
}
