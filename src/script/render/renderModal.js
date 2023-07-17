const modal = document.querySelector("#modal");

function renderModal(src, alt = "QR_Code") {
	modal.classList.toggle("hidden");
	modal.classList.add("flex");
	modal.innerHTML += `
      <div class="bg-white p-8 rounded flex flex-col justify-center gap-4">
        <img id="modalQR" src="${src}" width="200px" height="200px" alt=${alt}/>
        <button id="QRDownload" class="bg-[#144EE3] text-white rounded p-4">Download QR</button>
      </div>
    `;
}

function closeModal() {
	modal.removeChild(modal.firstElementChild);
	modal.classList.toggle("hidden");
}

export { renderModal, closeModal };
