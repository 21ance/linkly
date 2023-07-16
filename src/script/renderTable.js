function renderTable() {
	const linkArray = JSON.parse(localStorage.getItem("links"));
	if (linkArray === null) {
		document.querySelector("#table").innerHTML = `
      <h2 class="col-[1/-1]">You do not have any shortened links<h2/> 
			`;
	} else {
		document.querySelector("#table").innerHTML = `
  		<thead clas="text-start">
    		<tr>
      		<th class="text-start p-4">Short Link</th>
      		<th class="text-start p-4 hidden md:block">Original Link</th>
      		<th class="p-4">QR Code</th>
    		</tr>
  		</thead>
			<tbody id="tableBody" class="bg-white text-black">
			</tbody>`;
		linkArray.reverse().forEach((array) => {
			document.querySelector("#tableBody").innerHTML += `
    		<tr class="bg-[#1C283F] border-b-2 border-[#0B101B]">
    		  <td class="px-4 text-[#C9CED6]">
						<button class="flex gap-1">
							<span>${array.shorten}</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  							<path fill-rule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clip-rule="evenodd" />
  							<path d="M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z" />
							</svg>
						</button>
					</td>
    		  <td class="px-4 text-[#C9CED6] hidden md:table-cell"><span class="block truncate md:max-w-[35ch]">${array.original}</span></td>
    		  <td class="px-4 py-2"><img src=${array.qr} alt="${array.shorten}_qr" class="mx-auto" width="75px"></td>
    		</tr>`;
		});
	}
}

export default renderTable;
