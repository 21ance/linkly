import fetchLink from "./fetch";
import renderTable from "./renderTable";

const shortenBtn = document.querySelector("#shorten");

shortenBtn.addEventListener("click", (e) => {
	e.preventDefault();
	fetchLink(document.querySelector("#link").value);
});

renderTable();
