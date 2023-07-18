import renderNotification from "./render/renderNotification";

async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		renderNotification("Copied link to clipboard");
		console.log(`copied to clipboard: ${text}`);
	} catch (error) {
		console.error(`unable to copy: , ${error}`);
	}
}

export default copyToClipboard;
