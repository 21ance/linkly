let timer;

function renderCopiedLink() {
	document.querySelector("#copied").classList.remove("hidden");
	clearTimeout(timer);
	startTimer();
}

function startTimer() {
	timer = setTimeout(() => {
		document.querySelector("#copied").classList.add("hidden");
	}, 3000);
}

export default renderCopiedLink;
