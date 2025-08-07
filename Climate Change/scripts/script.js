const navbar = document.querySelector(".navbar");
const hamburgerIcon = document.querySelector(".navbar__hamburger-icon");
const hero = document.querySelector(".hero");

const closed = "closed";
const smallScreen = "small-screen";
const scrollingDown = "scrolling-down";

let prevScrollY = window.pageYOffset;

adjustForSmallScreens();
adjustHeroPosition();

// Prevent a visual bug where it would adjust hero position using a height
// midway/start of navbar moving animation;
// Likely a better way to do this - relies on knowing navbar animation is 500ms
setTimeout(adjustHeroPosition, 1000);

window.addEventListener("resize", adjustForSmallScreens);
window.addEventListener("resize", () => setTimeout(adjustHeroPosition, 1000));

window.addEventListener("scroll", () => {
	// Large screens only
	if (window.matchMedia("(width < 48em)").matches) return;

	let currentScrollY = window.pageYOffset;

	// Scrolling up
	if (currentScrollY < prevScrollY) {
		navbar.classList.remove(scrollingDown);
	}

	// Scrolling down
	if (
		currentScrollY > prevScrollY &&
		!navbar.classList.contains(scrollingDown)
	) {
		navbar.classList.add(scrollingDown);
	}

	prevScrollY = currentScrollY;
});

hamburgerIcon.addEventListener("click", () => {
	navbar.classList.contains(closed)
		? navbar.classList.remove(closed)
		: navbar.classList.add(closed);
});

function adjustForSmallScreens() {
	window.matchMedia("(width < 48em)").matches
		? navbar.classList.add(closed, smallScreen)
		: navbar.classList.remove(closed, smallScreen);
}

function adjustHeroPosition() {
	hero.style.marginTop = `${navbar.offsetHeight}px`;
}
