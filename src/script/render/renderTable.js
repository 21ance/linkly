function renderTable() {
	const linkArray = JSON.parse(localStorage.getItem("links"));
	if (linkArray === null || linkArray.length === 0) {
		document.querySelector("#table").innerHTML = `
      <h2 class="bg-[#1C283F] rounded p-4">You do not have any shortened links<h2/> `;
	} else {
		document.querySelector("#table").innerHTML = `
  		<thead class="bg-[#181E29] text-start sticky top-0">
    		<tr>
      		<th class="text-start px-2 py-4 md:p-4">Short Link</th>
      		<th class="text-start px-2 py-4 md:p-4 hidden md:block">Original Link</th>
      		<th class="px-2 py-4 md:p-4 min-w-[8ch]">QR Code</th>
    		</tr>
  		</thead>
			<tbody id="tableBody" class="bg-white text-black">
			</tbody>`;
		let count = 1;
		linkArray.reverse().forEach((item) => {
			document.querySelector("#tableBody").innerHTML += `
    		<tr class="bg-[#1C283F] border-b-2 border-[#0B101B]" data-index=${count++}>
    		  <td class="px-2 md:px-4 text-[#C9CED6] flex gap-1 h-[93px] justify-center items-center">
						<button class="duration-200 lg:hover:scale-[1.3] remove-link w-[2ch]" title="Remove link"> 
							<img src="./src/img/close.svg" width="20px" height="20px" alt="remove link" 
								data-shorten=${item.shorten} data-original=${item.original}>
						</button>
						<button class="flex gap-1 shorten-link w-[23ch] justify-start duration-200 lg:hover:scale-[1.02]" title="Copy to clipboard">
							<span>${item.shorten}</span>
							<img src="./src/img/clipboard.svg" width="20px" height="20px" alt="clipboard"/>
						</button>
					</td>
    		  <td class="px-2 md:px-4 text-[#C9CED6] hidden md:table-cell"><span class="block truncate md:max-w-[35ch]">${
						item.original
					}</span></td>
    		  <td class="px-2 md:px-4 py-2"><button class="duration-200 lg:hover:scale-[1.02]" title="View QR"><img src=${
						item.qr
					} alt="${
				item.shorten
			}_qr" class="mx-auto qr-code" width="70px" height="70px"></button></td>
    		</tr>`;
		});
	}
}

export default renderTable;
