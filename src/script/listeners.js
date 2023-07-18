import { fetchLink, downloadImage } from "./fetch";
import copyToClipboard from "./copyToClipboard";
import {
	renderQRModal,
	renderRemoveLinkModal,
	closeModal,
} from "./render/renderModal";
import removeLink from "./removeLink";

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

		if (target.parentElement.classList.contains("remove-link")) {
			renderRemoveLinkModal(
				target.dataset.shorten,
				target.dataset.original,
				target.parentElement.parentElement.parentElement.dataset.index - 1
			);
		}

		if (target.id === "removeLink") {
			removeLink(target.dataset.index);
			closeModal();
		}

		if (target.classList.contains("qr-code")) {
			renderQRModal(target.src);
		}

		if (target.id === "QRDownload") {
			downloadImage(document.querySelector("#modalQR").src);
			closeModal();
		}

		if (
			target.id === "modal" ||
			target.classList.contains("close-modal")
		) {
			closeModal();
		}
	});
})();
