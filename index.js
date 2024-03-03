let title = document.querySelector("h1");

document.addEventListener("mousemove", (e) => {
	title.style.left = e.clientX;
});
