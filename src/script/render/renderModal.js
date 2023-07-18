const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");

function renderQRModal(src, alt = "QR_Code") {
	openModal();
	modalBody.innerHTML = `
        <img id="modalQR" src="${src}" width="200px" height="200px" alt=${alt}/>
        <button id="QRDownload" class="bg-[#144EE3] text-white rounded p-4">Download QR</button>
    `;
}

function renderRemoveLinkModal(shortenLink, originalLink, index) {
	openModal();
	modalBody.innerHTML += `
        <h2 class="font-bold text-lg">Are you sure you want to remove link?</h2>
        <p>Shorten: ${shortenLink}</p>
        <p class="truncate max-w-[35ch]">Original: ${originalLink}</p>
        <div class="flex justify-end gap-4 mt-4">
          <button class="bg-black duration-200 lg:hover:bg-black/80 px-4 py-2 rounded text-white close-modal">Cancel</button>
          <button id="removeLink" class="bg-red-600 duration-200 lg:hover:bg-red-600/80 px-4 py-2 rounded text-white" data-index=${index}>Remove</button>
        </div>
    `;
}

function openModal() {
	modal.classList.toggle("hidden");
	modal.classList.add("flex");
}

function closeModal() {
	while (modalBody.firstChild) {
		modalBody.removeChild(modalBody.firstChild);
	}
	modal.classList.toggle("hidden");
}

export { renderQRModal, renderRemoveLinkModal, closeModal };
