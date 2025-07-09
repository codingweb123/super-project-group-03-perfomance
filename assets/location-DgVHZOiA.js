document.querySelectorAll("iframe[data-src]").forEach(e=>e.setAttribute("src",e.dataset.src));const s=document.querySelector("#scrollToTopBtn");window.addEventListener("scroll",()=>{scrollY>300?s.classList.add("show"):s.classList.remove("show")});s.addEventListener("click",()=>{scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=location-DgVHZOiA.js.map
