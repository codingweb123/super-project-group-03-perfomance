import gsap from "gsap"

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		document
			.querySelectorAll("iframe[data-src]")
			.forEach(iframe => iframe.setAttribute("src", iframe.dataset.src))
	}, 800)
})

const scrollBtn = document.querySelector("#scrollToTopBtn")

window.addEventListener("scroll", () => {
	if (scrollY > 300) {
		scrollBtn.classList.add("show")
	} else {
		scrollBtn.classList.remove("show")
	}
})

scrollBtn.addEventListener("click", () => {
	gsap.to(window, {
		duration: 0.7,
		ease: "power1.inOut",
	})
})
