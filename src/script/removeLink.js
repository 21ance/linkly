import renderTable from "./render/renderTable";
import renderNotification from "./render/renderNotification";

function removeLink(index) {
	let linkArray = JSON.parse(localStorage.getItem("links"));
	linkArray.reverse().splice(index, 1);
	localStorage.setItem("links", JSON.stringify(linkArray.reverse()));

	if (linkArray.length === 0) {
		document.querySelector("#table").innerHTML = `
      <h2 class="bg-[#1C283F] rounded p-4">You do not have any shortened links<h2/> `;
		return;
	}

	renderNotification("Link removed");
	renderTable();
}

export default removeLink;
