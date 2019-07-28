

const rootNode = document.getElementById('root');
let h1 = document.createElement('h1');
let buttonAddTask = document.createElement('button');
let parag = document.createElement('p');
let ul = document.createElement('ul');
let inputTask = document.createElement('input');
let h3 = document.createElement('h3');
let butAddTask = document.createElement('button');
let divAddTask = document.createElement('div');
let divStartPage = document.createElement('div');
let divListBlock = document.createElement('div');
let saveChanges = document.createElement('button');

divAddTask.className = 'all-locations';
divStartPage.className = 'all-locations';
divListBlock.className = 'all-locations';

rootNode.appendChild(divAddTask);
rootNode.appendChild(divStartPage);
rootNode.appendChild(divListBlock);

(function() {
	startPage();
	addTask();
	listBlock();
	compareHash();	
	window.onhashchange = compareHash;
	inputTask.onclick = newText;
	location.hash = '#/startPage';
})();

function listBlock() {
	h3.innerHTML = 'Simple TODO application';
	divListBlock.appendChild(h3);
	butAddTask.innerHTML = 'Add new task';
	divListBlock.appendChild(butAddTask);
	divListBlock.appendChild(ul);
}

function addTask() {	
	divAddTask.id = 'divAddTask';
	let h2 = document.createElement('h2');
	h2.innerHTML = 'Add task';
	divAddTask.appendChild(h2);
	divAddTask.appendChild(inputTask);
	inputTask.id = 'inputTask';
	let cancel = document.createElement('button');
	cancel.innerHTML = 'Cancel';
	divAddTask.appendChild(cancel);	
	saveChanges.innerHTML = 'Save changes';
	divAddTask.appendChild(saveChanges);
}

function startPage() {
	h1.innerHTML = 'Simple TODO application';
	divStartPage.appendChild(h1);
	buttonAddTask.innerHTML = 'Add new task';
	divStartPage.appendChild(buttonAddTask);
	parag.innerHTML = 'TODO is empty';
	divStartPage.appendChild(parag);
}

function compareHash() {
	let allLocations = document.querySelectorAll('.all-locations');
	for(let i=0; i < allLocations.length; i++) {
		allLocations[i].classList.add('d-none');
	}
	
	if(location.hash === '#/startPage') {
		divStartPage.classList.remove('d-none');
	}
	if(location.hash === '#/addTask') {
		divAddTask.classList.remove('d-none');
	}
	if(location.hash === '#/taskList') {
		divListBlock.classList.remove('d-none');
	}
}

buttonAddTask.onclick = () => {
    location.hash = '#/addTask';
}
saveChanges.onclick = function() {
    location.hash = '#/taskList';
    createRow();
}
butAddTask.onclick = () => {
    location.hash = '#/addTask';
}

function createRow() {
	let li = document.createElement('li');
	ul.appendChild(li);
	let divForEdit = document.createElement('div');
	ul.appendChild(divForEdit);
	let inputLi = document.createElement('input');
	inputLi.type = 'checkbox';
	inputLi.className = 'checkboxLi';
	li.appendChild(inputLi);
	let textLi = document.createTextNode(inputTask.value);
	let spanLiText = document.createElement('span');
	spanLiText.className = 'spanLiText';
	li.appendChild(spanLiText);
	spanLiText.appendChild(textLi)
	let buttonDelete = document.createElement('button');
	buttonDelete.innerHTML = 'Delete';
	li.appendChild(buttonDelete);
	buttonDelete.className = 'buttonDeleteClass';
	inputTask.value = 'Add new action';
	buttonDelete.onclick = deleteLi;

	function deleteLi() {
		buttonDelete.parentNode.remove();
	}
}

function newText() {
	inputTask.value = '';
}
