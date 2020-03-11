const task3Element = document.getElementById('task-3');

function greet(){
	alert("Hi");
}

function greetUser(name){
	alert('Hi ' + name );
}

function combineStrings(str1,str2,str3){
	return `${str1} ${str2} ${str3}`;
}

greetUser('Nico');
alert(combineStrings('Hi','Hello','There'));

task3Element.addEventListener('click', greet);