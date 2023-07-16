import renderTable from "./renderTable";

async function fetchLink(link) {
	const url = "https://url-shortener23.p.rapidapi.com/shorten";
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key":
				"2a623be066mshfaff3883fad330fp1a4d2bjsnd5e3b374d997",
			"X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
		},
		body: new URLSearchParams({
			url: link,
		}),
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const newLink = {
			original: link,
			shorten: result.slice(14, -2),
			qr: fetchQR(link),
		};

		let linkArray = [];
		if (JSON.parse(localStorage.getItem("links")) !== null) {
			linkArray = JSON.parse(localStorage.getItem("links"));
		}

		linkArray.push(newLink);
		localStorage.setItem("links", JSON.stringify(linkArray));
		renderTable();
	} catch (error) {
		return error;
	}
}

function fetchQR(link) {
	let qr =
		"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

	return qr + link;
}

export default fetchLink;
