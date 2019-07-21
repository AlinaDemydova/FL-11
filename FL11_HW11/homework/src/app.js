let rootNode = document.getElementById('root');
let more10 = document.getElementById('of10');
let textarea = document.getElementById('text');
let buttonPlus = document.getElementById('buttonPlus');
let ul = document.createElement('ul');
const maxItems = 10;
rootNode.parentNode.appendChild(ul);
buttonPlus.disabled = true;
textarea.onclick = newText;
buttonPlus.onclick = newLine;

function newText() {
	textarea.value = '';
	if (textarea.value !== null) {
		buttonPlus.disabled = false;
	}
}

function createRow() {
	let row = document.createElement('div');
	row.draggable = true;
	ul.appendChild(row);
	let li = document.createElement('li');
	row.appendChild(li);
	let divForEdit = document.createElement('div');
	row.appendChild(divForEdit);
	let inputLi = document.createElement('input');
	inputLi.type = 'checkbox';
	inputLi.className = 'checkboxLi';
	li.appendChild(inputLi);
	let textLi = document.createTextNode(textarea.value);
	let spanLiText = document.createElement('span');
	spanLiText.className = 'spanLiText';
	li.appendChild(spanLiText);
	spanLiText.appendChild(textLi)
	let buttonEdit = document.createElement('button');
	buttonEdit.innerHTML = '<i class="material-icons">create</i>';
	li.appendChild(buttonEdit);
	let buttonDelete = document.createElement('button');
	buttonDelete.innerHTML = '<i class="material-icons">delete</i>';
	li.appendChild(buttonDelete);
	buttonDelete.className = 'buttonDeleteClass';
	textarea.value = 'Add new action';
	buttonDelete.onclick = deleteLi;
	buttonEdit.onclick = editLi;

	function deleteLi() {
		buttonDelete.parentNode.parentNode.remove();
		more10.style = 'visibility: hidden';
	}

	function editLi() {
		let areaEdit = document.createElement('input');
		areaEdit.className = 'areaEdit';
		areaEdit.value = spanLiText.innerHTML;
		divForEdit.appendChild(areaEdit);
		buttonEdit.style = 'display: none';
		let buttonSaveEdit = document.createElement('button');
		buttonSaveEdit.innerHTML = '<i class="material-icons">save</i>';
		divForEdit.appendChild(buttonSaveEdit);
		buttonSaveEdit.onclick = saveChanges;

		function saveChanges() {
			spanLiText.innerHTML = areaEdit.value;
			buttonEdit.style = 'display: inline';
			areaEdit.style = 'display: none';
			buttonSaveEdit.style = 'display: none';
		}
	}
}

function newLine() {
	if (textarea.value !== '' && textarea.value !== 'Add new action') {
		let listLength = document.getElementsByTagName('li').length;
		if (listLength < maxItems) {
			createRow();
		} else {
			more10.style = 'display: block';
			textarea.value = '';
		}
	} else {
		textarea.value = 'Add new action';
		buttonPlus.disabled = true;
	}
}