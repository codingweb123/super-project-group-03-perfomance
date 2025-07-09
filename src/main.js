document.addEventListener("DOMContentLoaded", () => {
	;(async () => {
        document.body.classList.add("c-loading")
		setTimeout(async () => {
			await import("./js/animations.js")
			await import("./js/hero.js")
			await import("./js/books.js")
			await import("./js/menu-overlay.js")
			await import("./js/feedbacks.js")
			await import("./js/events.js")
			await import("./js/footer.js")
			await import("./js/book-modal.js")
			await import("./js/location.js")
			await import("./js/cursor.js")
			await import("./js/register-modal.js")
			await import("./js/header.js")
		}, 800)
	})()
})
