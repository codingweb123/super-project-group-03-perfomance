import{i as l}from"./vendor-BDDvTSZg.js";import{r as w}from"./helpers-CeCOYa2k.js";import{g as S,a as E,l as C,b as A}from"./book-modal-raEd8wRl.js";const{books:b}=w,g=b.querySelector(".books-list"),k=b.querySelector(".categories-btn"),s=b.querySelector(".categories"),q=()=>!matchMedia("(hover: hover)").matches,i=()=>q()?10:24,m=4,p=document.querySelector(".pagination-number"),d=document.querySelector(".btn.more"),x=document.querySelector(".pagination-all"),v=()=>{d.classList.remove("visually-hidden")},y=()=>{d.classList.add("visually-hidden")},B=e=>{g.innerHTML=e.reduce((t,{_id:o,book_image:c,title:n,price:u,author:h})=>t+=`
    <li>
        <img
            src="${c}"
			loading="lazy"
            alt="${n}"
        />
        <h3><b>${n}</b><span class="price">$${u}</span></h3>
        <p class="author">${h}</p>
        <button class="btn" data-bookid="${o}">Learn More</button>
    </li>`,"")},N=e=>{g.innerHTML+=e.reduce((t,{_id:o,book_image:c,title:n,price:u,author:h})=>t+=`
    <li>
        <img
            src="${c}"
			loading="lazy"
            alt="${n}"
        />
        <h3><b>${n}</b><span class="price">$${u}</span></h3>
        <p class="author">${h}</p>
        <button class="btn" data-bookid="${o}">Learn More</button>
    </li>`,"")},H=(e,t=0)=>e.slice(t*m,(t+1)*m),T=(e,t=0)=>e.slice(t*i(),(t+1)*i()),L=(e,t)=>{console.log(p.textContent),p.textContent=e.length<t?e.length.toString():t.toString()},$=e=>{x.textContent=e.toString()},P=()=>{g.innerHTML=[0,0,0,0].reduce((e,t)=>e+=`
    <li>
        <img
		    src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            class="loading"
            alt=""
        />
        <h3><b class="loading">................................................</b><span class="price loading">............</span></h3>
        <p class="author loading">............... ............</p>
        <button class="btn" disabled>Learn More</button>
    </li>`,"")},z=e=>{for(let t=0;t<15;t++)e.innerHTML+='<li class="loading">........................................................................................</li>'},f=e=>{e.querySelectorAll(".loading").forEach(t=>t.remove())};let a=[],r=0;const M=async()=>{a=[],r=0,y(),A().then(e=>{f(g),e.forEach(t=>a.push(...t.books)),B(T(a)),r+=1,a.length>i()&&v(),L(a,i()),$(a.length)}).catch(()=>{l.error({message:"Error while getting data from all categories!"})})};document.addEventListener("DOMContentLoaded",async()=>{z(s),setTimeout(async()=>{S().then(e=>{f(s),s.innerHTML+=e.reduce((t,{list_name:o})=>t+=o?`<li>${o}`:"","")}).catch(()=>{l.error({message:"Error while getting data from categories!"})});try{await M()}catch{l.error({message:"Error while getting books data!"})}},1e3)});k.addEventListener("click",()=>{s.classList.toggle("active")});s.addEventListener("click",async e=>{if(e.target===e.currentTarget||!e.target||e.target.classList.contains("active"))return;s.querySelectorAll("li.active").forEach(o=>o.classList.remove("active")),e.target.classList.add("active");const t=e.target.textContent;if(k.textContent=t,s.classList.remove("active"),P(),y(),e.target.dataset.value==="all"){await M();return}a=[],r=0,E(t).then(o=>{a=o,B(T(o)),r+=1,o.length>i()&&v(),L(o,i()),$(o.length)}).catch(()=>{l.error({message:"Error while getting data from category!"})}).finally(()=>f(g))});d.addEventListener("click",e=>{e.preventDefault(),d.disabled=!0;const t=i()+r*m,o=a.length-t;if(console.log(o),o>0){const c=H(a,r);N(c),r++;const n=t+c.length;L(a,n),n>=a.length&&(y(),l.success({position:"bottomRight",message:"This is the last page of books for you :)",color:"#fff"})),d.disabled=!1}else l.error({message:"You already loaded all books from that category!"})});g.addEventListener("click",async e=>{e.target.nodeName!="BUTTON"||e.target.classList!="btn"||await C(e.target.dataset.bookid)});
//# sourceMappingURL=books-xQikhilA.js.map
