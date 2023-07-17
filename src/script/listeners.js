import { fetchLink, downloadImage } from "./fetch";
import copyToClipboard from "./copyToClipboard";
import { renderModal, closeModal } from "./render/renderModal";

(() => {
	const shortenBtn = document.querySelector("#shorten");

	shortenBtn.addEventListener("click", (e) => {
		fetchLink(document.querySelector("#link").value);
		e.preventDefault();
	});

	document.addEventListener("click", (e) => {
		const target = e.target;

		if (target.parentElement.classList.contains("shorten-link")) {
			copyToClipboard(
				document.querySelector(
					`#tableBody > tr:nth-child(${target.parentElement.parentElement.parentElement.dataset.index}) button > span`
				).textContent
			);
		}

		if (target.classList.contains("qr-code")) {
			renderModal(target.src);
		}

		if (target.id === "QRDownload") {
			downloadImage(document.querySelector("#modalQR").src);
			closeModal();
		}

		if (target.id === "modal") {
			closeModal();
		}
	});
})();
