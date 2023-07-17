import renderCopiedLink from "./render/renderCopiedLink";

async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		renderCopiedLink();
		console.log(`copied to clipboard: ${text}`);
	} catch (error) {
		console.error(`unable to copy: , ${error}`);
	}
}

export default copyToClipboard;
