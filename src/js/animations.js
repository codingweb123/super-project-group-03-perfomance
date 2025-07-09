import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

document.querySelectorAll("a[href]").forEach(c => {
	c.onclick = e => {
		let t = e.target.closest("a")
		t.getAttribute("href").includes("#") &&
			"#" != t.getAttribute("href") &&
			(e.preventDefault(),
			gsap.to(window, {
				duration: 0.7,
				ease: "power1.inOut",
				scrollTo: `${t.getAttribute("href")}`,
			}))
	}
})

let tl = gsap.timeline({ ease: "power1.inOut" })
tl.from("header", { y: -40, opacity: 0.5 })
tl.from("header .header-logo", { y: -5, opacity: 0, duration: 0.1 })
for (let e = 1; e < 6; e++)
	tl.from(`header .header-nav-list .header-nav-item:nth-child(${e})`, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.1,
	})
let feedbacksTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".feedbacks",
		start: "top 80%",
	},
	delay: 0.5,
	ease: "power1.inOut",
})
feedbacksTL.from(".feedbacks-title", {
	y: -65,
	opacity: 0,
	duration: 0.5,
})
feedbacksTL.from(".feedbacks-text", { x: -65, opacity: 0, duration: 0.3 })
for (let e = 1; e < 4; e++)
	feedbacksTL.from(`.feedbacks .swiper-slide:nth-child(${e})`, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.15,
	})
gsap.utils.toArray(".feedbacks .swiper-pagination-bullet").forEach(item => {
	feedbacksTL.from(item, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.1,
	})
})
feedbacksTL.from(".feedbacks .feedbacks-btn-prev", {
	y: -40,
	opacity: 0,
	duration: 0.15,
})
feedbacksTL.from(".feedbacks .feedbacks-btn-next", {
	y: -40,
	opacity: 0,
	duration: 0.15,
})
let eventsTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".events",
		start: "top 60%",
	},
	delay: 0.5,
	ease: "power1.inOut",
})
eventsTL.from(".events h4", {
	y: -65,
	opacity: 0,
	duration: 0.5,
})
eventsTL.from(".events h2", { x: -65, opacity: 0, duration: 0.3 })
eventsTL.from(".events .event-text", { x: -65, opacity: 0, duration: 0.3 })
for (let e = 1; e < 4; e++)
	eventsTL.from(`.events .swiper-slide:nth-child(${e})`, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.15,
	})
gsap.utils.toArray(".events .swiper-pagination-bullet").forEach(item => {
	eventsTL.from(item, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.1,
	})
})
eventsTL.from(".events .events-button-prev", {
	y: -40,
	opacity: 0,
	duration: 0.15,
})
eventsTL.from(".events .events-button-next", {
	y: -40,
	opacity: 0,
	duration: 0.15,
})
let articleTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".article",
		start: "top center",
	},
	delay: 0.4,
	ease: "power1.inOut",
})
articleTL.from(".article img", { x: -45, opacity: 0, duration: 0.15 })
articleTL.from(".article h2", { y: -115, opacity: 0, duration: 0.4 })
articleTL.from(".article p", { x: -45, opacity: 0, duration: 0.3 })
let locationTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".location",
		start: "top 10%",
	},
	delay: 0.15,
	ease: "power1.inOut",
})
locationTL.from(".location .loc-sec", { x: -45, opacity: 0, duration: 0.15 })
locationTL.from(".location h2", { x: -45, opacity: 0, duration: 0.15 })
locationTL.from(".location .loc-text", { x: -45, opacity: 0, duration: 0.15 })
locationTL.from(".location iframe", { y: -115, opacity: 0, duration: 0.2 })
gsap.utils.toArray(".location .loc-link").forEach(item => {
	locationTL.from(item, {
		x: 45,
		y: -5,
		opacity: 0,
		duration: 0.15,
	})
})
let footerTL = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",
		start: "top center",
	},
	delay: 0.4,
	ease: "power1.inOut",
})
footerTL.from(".footer .footer-logo", { y: -5, opacity: 0, duration: 0.15 })
for (let e = 1; e < 5; e++)
	footerTL.from(`.footer .footer-nav-item:nth-child(${e})`, {
		x: -5,
		y: -15,
		opacity: 0,
		duration: 0.15,
	})
footerTL.from(".footer .footer-form-text", {
	x: -45,
	opacity: 0,
	duration: 0.15,
})
footerTL.from(".footer .footer-form-label", {
	x: -45,
	opacity: 0,
	duration: 0.15,
})
footerTL.from(".footer .footer-afterform-text", {
	x: -45,
	opacity: 0,
	duration: 0.15,
})
footerTL.from(".footer .footer-company-text", {
	x: -45,
	opacity: 0,
	duration: 0.15,
})
