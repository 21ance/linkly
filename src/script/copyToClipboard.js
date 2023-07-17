async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		console.log(`Content copied to clipboard: ${text}`);
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
}

export default copyToClipboard;
