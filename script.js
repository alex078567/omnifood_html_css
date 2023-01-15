const header = document.querySelector(".header");
const button = document.querySelector(".btn-mobile-nav");

button.addEventListener("click", () => {
	if (header.classList.contains("nav-open")) {
		header.classList.remove("nav-open");
	} else {
		header.classList.add("nav-open");
	}
});
