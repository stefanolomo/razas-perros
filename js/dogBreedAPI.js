let BreedListApiUrl = "https://dog.ceo/api/breeds/list/all";
let BaseUrlApi = "https://dog.ceo/api/breed/"
let BreedDOMContainer = document.querySelector(".breed-container")
let BreedImageContainer = document.querySelector(".breed-image-container")

fetch(BreedListApiUrl)
	.then((response) => response.json())
	.then((data) => {
		for (const breed in data.message) {
			let CapitalizedBreed = breed.replace(/^\w/, c => c.toUpperCase())
			const HtmlTemplate = `<option value="${breed}">${CapitalizedBreed}</option>`
			BreedDOMContainer.insertAdjacentHTML('beforeend', HtmlTemplate)
		}
	})

let consumeApi = (Breed) => {
	fetch(`${BaseUrlApi}${Breed}/images`)
	.then((response) => response.json())
	.then((data) => {
		data.message.slice(0, 15).forEach(BreedImage => {
			const HtmlTemplate = `<img class="img" src="${BreedImage}" alt="${Breed}">`
			BreedImageContainer.insertAdjacentHTML('beforeend', HtmlTemplate)
		});
	})
}

let getBreed = (element) => {
	const elements = document.querySelectorAll(".img")
	elements.forEach(element => element.remove())
	let Breed = element.value
	consumeApi(Breed)
};
