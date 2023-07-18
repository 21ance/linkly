(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function p(){const e=JSON.parse(localStorage.getItem("links"));if(e===null||e.length===0)document.querySelector("#table").innerHTML=`
      <h2 class="bg-[#1C283F] rounded p-4">You do not have any shortened links<h2/> `;else{document.querySelector("#table").innerHTML=`
  		<thead class="bg-[#181E29] text-start sticky top-0">
    		<tr>
      		<th class="text-start px-2 py-4 md:p-4">Short Link</th>
      		<th class="text-start px-2 py-4 md:p-4 hidden md:block">Original Link</th>
      		<th class="px-2 py-4 md:p-4 min-w-[8ch]">QR Code</th>
    		</tr>
  		</thead>
			<tbody id="tableBody" class="bg-white text-black">
			</tbody>`;let o=1;e.reverse().forEach(t=>{document.querySelector("#tableBody").innerHTML+=`
    		<tr class="bg-[#1C283F] border-b-2 border-[#0B101B]" data-index=${o++}>
    		  <td class="px-2 md:px-4 text-[#C9CED6] flex gap-1 h-[93px] justify-center items-center">
						<button class="duration-200 lg:hover:scale-[1.3] remove-link w-[2ch]" title="Remove link"> 
							<img src="./src/img/close.svg" width="20px" height="20px" alt="remove link" 
								data-shorten=${t.shorten} data-original=${t.original}>
						</button>
						<button class="flex gap-1 shorten-link w-[23ch] justify-start duration-200 lg:hover:scale-[1.02]" title="Copy to clipboard">
							<span>${t.shorten}</span>
							<img src="./src/img/clipboard.svg" width="20px" height="20px" alt="clipboard"/>
						</button>
					</td>
    		  <td class="px-2 md:px-4 text-[#C9CED6] hidden md:table-cell"><span class="block truncate md:max-w-[35ch]">${t.original}</span></td>
    		  <td class="px-2 md:px-4 py-2"><button class="duration-200 lg:hover:scale-[1.02]" title="View QR"><img src=${t.qr} alt="${t.shorten}_qr" class="mx-auto qr-code" width="70px" height="70px"></button></td>
    		</tr>`})}}function l(e){document.querySelector("#invalidLink").textContent=e,document.querySelector("#link").value=""}function g(){document.querySelector("#invalidLink").textContent="",document.querySelector("#link").value=""}async function b(e){const o="https://url-shortener23.p.rapidapi.com/shorten",t={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded","X-RapidAPI-Key":"2a623be066mshfaff3883fad330fp1a4d2bjsnd5e3b374d997","X-RapidAPI-Host":"url-shortener23.p.rapidapi.com"},body:new URLSearchParams({url:e})};if(e===""){l("Please enter a link to shorten");return}if(!e.includes(".")||!e.includes("https://")){l("Please enter a valid link, eg: https://google.com/");return}g();try{const n=await(await fetch(o,t)).text(),r={original:e,shorten:n.slice(14,-2),qr:y(e)};let i=[];JSON.parse(localStorage.getItem("links"))!==null&&(i=JSON.parse(localStorage.getItem("links"))),i.push(r),localStorage.setItem("links",JSON.stringify(i)),p()}catch(a){return console.log(a),l(a)}}function y(e){return"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+e}async function x(e,o="QR.png"){const a=await(await fetch(e)).blob(),n=URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download=o,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}const d=document.querySelector("#notification");let h;function m(e){d.textContent=e,d.classList.remove("hidden"),clearTimeout(h),v()}function v(){h=setTimeout(()=>{d.classList.add("hidden")},3e3)}async function L(e){try{await navigator.clipboard.writeText(e),m("Copied link to clipboard"),console.log(`copied to clipboard: ${e}`)}catch(o){console.error(`unable to copy: , ${o}`)}}const u=document.querySelector("#modal"),s=document.querySelector("#modalBody");function k(e,o="QR_Code"){f(),s.innerHTML=`
        <img id="modalQR" src="${e}" width="200px" height="200px" alt=${o}/>
        <button id="QRDownload" class="bg-[#144EE3] text-white rounded p-4">Download QR</button>
    `}function w(e,o,t){f(),s.innerHTML+=`
        <h2 class="font-bold text-lg">Are you sure you want to remove link?</h2>
        <p>Shorten: ${e}</p>
        <p class="truncate max-w-[35ch]">Original: ${o}</p>
        <div class="flex justify-end gap-4 mt-4">
          <button class="bg-black duration-200 lg:hover:bg-black/80 px-4 py-2 rounded text-white close-modal">Cancel</button>
          <button id="removeLink" class="bg-red-600 duration-200 lg:hover:bg-red-600/80 px-4 py-2 rounded text-white" data-index=${t}>Remove</button>
        </div>
    `}function f(){u.classList.toggle("hidden"),u.classList.add("flex")}function c(){for(;s.firstChild;)s.removeChild(s.firstChild);u.classList.toggle("hidden")}function S(e){let o=JSON.parse(localStorage.getItem("links"));if(o.reverse().splice(e,1),localStorage.setItem("links",JSON.stringify(o.reverse())),o.length===0){document.querySelector("#table").innerHTML=`
      <h2 class="bg-[#1C283F] rounded p-4">You do not have any shortened links<h2/> `;return}m("Link removed"),p()}document.querySelector("#shorten").addEventListener("click",o=>{b(document.querySelector("#link").value),o.preventDefault()}),document.addEventListener("click",o=>{const t=o.target;t.parentElement.classList.contains("shorten-link")&&L(document.querySelector(`#tableBody > tr:nth-child(${t.parentElement.parentElement.parentElement.dataset.index}) button > span`).textContent),t.parentElement.classList.contains("remove-link")&&w(t.dataset.shorten,t.dataset.original,t.parentElement.parentElement.parentElement.dataset.index-1),t.id==="removeLink"&&(S(t.dataset.index),c()),t.classList.contains("qr-code")&&k(t.src),t.id==="QRDownload"&&(x(document.querySelector("#modalQR").src),c()),(t.id==="modal"||t.classList.contains("close-modal"))&&c()});p();
