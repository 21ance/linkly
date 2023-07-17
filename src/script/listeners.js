import fetchLink from "./fetch";
import copyToClipboard from "./copyToClipboard";

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
	});
})();
