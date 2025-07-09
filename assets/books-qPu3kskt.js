import{i as l,S as $}from"./heavy-vendor-DzA-cfM-.js";import{r as w}from"./helpers-CeCOYa2k.js";import{g as M,a as E,l as A,b as C}from"./book-modal-pFAkgMxU.js";const{books:b}=w,g=b.querySelector(".books-list"),L=b.querySelector(".categories-btn"),s=b.querySelector(".categories"),q=()=>!matchMedia("(hover: hover)").matches,i=()=>q()?10:24,m=4,N=document.querySelector(".pagination-number"),d=document.querySelector(".btn.more"),x=document.querySelector(".pagination-all"),k=()=>{d.classList.remove("visually-hidden")},y=()=>{d.classList.add("visually-hidden")},v=e=>{g.innerHTML=e.reduce((t,{_id:o,book_image:c,title:r,price:h,author:u})=>t+=`
				<li>
				<img
				src="${c}"
				loading="lazy"
				alt="${r}"
				/>
				<h3><b>${r}</b><span class="price">$${h}</span></h3>
				<p class="author">${u}</p>
				<button class="btn" data-bookid="${o}">Learn More</button>
				</li>`,""),$.refresh()},H=e=>{g.innerHTML+=e.reduce((t,{_id:o,book_image:c,title:r,price:h,author:u})=>t+=`
    <li>
        <img
            src="${c}"
			loading="lazy"
            alt="${r}"
        />
        <h3><b>${r}</b><span class="price">$${h}</span></h3>
        <p class="author">${u}</p>
        <button class="btn" data-bookid="${o}">Learn More</button>
    </li>`,"")},P=(e,t=0)=>e.slice(t*m,(t+1)*m),B=(e,t=0)=>e.slice(t*i(),(t+1)*i()),f=(e,t)=>{N.textContent=e.length<t?e.length.toString():t.toString()},T=e=>{x.textContent=e.toString()},z=()=>{g.innerHTML=[0,0,0,0].reduce((e,t)=>e+=`
    <li>
        <img
		    src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            class="loading"
            alt=""
        />
        <h3><b class="loading">................................................</b><span class="price loading">............</span></h3>
        <p class="author loading">............... ............</p>
        <button class="btn" disabled>Learn More</button>
    </li>`,"")},R=e=>{for(let t=0;t<15;t++)e.innerHTML+='<li class="loading">........................................................................................</li>'},p=e=>{e.querySelectorAll(".loading").forEach(t=>t.remove())};let a=[],n=0;const S=async()=>{a=[],n=0,y(),C().then(e=>{p(g),e.forEach(t=>a.push(...t.books)),v(B(a)),n+=1,a.length>i()&&k(),f(a,i()),T(a.length)}).catch(()=>{l.error({message:"Error while getting data from all categories!"})})};R(s);setTimeout(async()=>{M().then(e=>{p(s),s.innerHTML+=e.reduce((t,{list_name:o})=>t+=o?`<li>${o}`:"","")}).catch(()=>{l.error({message:"Error while getting data from categories!"})});try{await S()}catch{l.error({message:"Error while getting books data!"})}},1e3);L.addEventListener("click",()=>{s.classList.toggle("active")});s.addEventListener("click",async e=>{if(e.target===e.currentTarget||!e.target||e.target.classList.contains("active"))return;s.querySelectorAll("li.active").forEach(o=>o.classList.remove("active")),e.target.classList.add("active");const t=e.target.textContent;if(L.textContent=t,s.classList.remove("active"),z(),y(),e.target.dataset.value==="all"){await S();return}a=[],n=0,E(t).then(o=>{a=o,v(B(o)),n+=1,o.length>i()&&k(),f(o,i()),T(o.length)}).catch(()=>{l.error({message:"Error while getting data from category!"})}).finally(()=>p(g))});d.addEventListener("click",e=>{e.preventDefault(),d.disabled=!0;const t=i()+n*m;if(a.length-t>0){const c=P(a,n);H(c),n++;const r=t+c.length;f(a,r),r>=a.length&&(y(),l.success({position:"bottomRight",message:"This is the last page of books for you :)",color:"#fff"})),d.disabled=!1}else l.error({message:"You already loaded all books from that category!"})});g.addEventListener("click",async e=>{e.target.nodeName!="BUTTON"||e.target.classList!="btn"||await A(e.target.dataset.bookid)});
//# sourceMappingURL=books-qPu3kskt.js.map
