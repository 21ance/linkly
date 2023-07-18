const notification = document.querySelector("#notification");
let timer;

function renderNotification(text) {
	notification.textContent = text;
	notification.classList.remove("hidden");
	clearTimeout(timer);
	startTimer();
}

function startTimer() {
	timer = setTimeout(() => {
		notification.classList.add("hidden");
	}, 3000);
}

export default renderNotification;
