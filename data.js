const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


let container = document.querySelector(".container");

function genera(array) {
	container.innerHTML = "";
	for (let i = 0; i < array.length; i++) {

		let sfondo = document.createElement("div");
		sfondo.classList.add("sfondo");
		container.append(sfondo);

		let icona = document.createElement("i");
	
		icona.classList.add(array[i].family);
		icona.classList.add(array[i].prefix + array[i].name);
		icona.classList.add(array[i].color);
		sfondo.append(icona);
	
		let nomiEl = array[i];
		let text = document.createElement("h3");
		sfondo.append(text);
		text.innerText = nomiEl.name;
	
	};
}

genera(icone);

const selector = document.getElementById("card");

selector.addEventListener("change",
function (){
    let selection = selector.value;
    if (selection == "animals") {
        const animals = icone.filter((Animali) => Animali.type === "animal");
        genera(animals);
    }
    else if (selection == "vegetables") {
        const vegetables = icone.filter((Vegetali) => Vegetali.type === "vegetable");
        genera(vegetables);
    }
    else if (selection == "users") {
        const users = icone.filter((Users) =>Users.type === "user");
        genera(users);
    }
    else {
        genera(icone);
    }
});

