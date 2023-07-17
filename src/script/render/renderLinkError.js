function renderLinkError(message) {
	document.querySelector("#invalidLink").textContent = message;
	document.querySelector("#link").value = "";
}

function resetLinkError() {
	document.querySelector("#invalidLink").textContent = "";
	document.querySelector("#link").value = "";
}

export { renderLinkError, resetLinkError };
