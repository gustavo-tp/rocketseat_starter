var listElement = document.getElementById('reposList');
var inputText = document.getElementsByTagName('input')[0];
var inputText = document.querySelector('body input.inpuText[name=user]');

var repos = [];

function renderRepos() {
	listElement.innerHTML = '';

	for (repo of repos) {
		var repoElement = document.createElement('li');
		var repoText = document.createTextNode(repo);

		repoElement.appendChild(repoText);
		listElement.appendChild(repoElement);
	}
}

function checaIdade(idade) {
	return new Promise(function(resolve, reject) {
		var message = '';

		var resove = function() { resolve(message); };
		var reject = function() { reject(message); };

		if (idade >= 18) {
			message = "Maior que 18";

			setTimeout(resove, 2000);
		} else {
			message = "Menor que 18";

			setInterval(reject(), 2000);
		}
	});
}

checaIdade(20)
	.then(function(reponse) {
		console.log(reponse);
	})
	.catch(function(error) {
		console.warn(error);
	});

function getReposPromisse(username) {
	return new Promise(function(resolve, reject) {
		xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://api.github.com/users/' + username + '/repos');
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					(xhr.status === 404) ? reject('Usário não existe') : reject('Erro na requisição');
				}
			}
		}
	});
}

function getReposAxios(username) {
	axios.get('https://api.github.com/users/' + username + '/repos')
		.then(function(response) {
			repos = [];

			for (repo of response.data) {
				repos.push(repo.name);
			}

			renderRepos();
		})
		.catch(function(error) {
			if (error.response.status === 404) {
				console.warn('Usuário não existe');
			} else {
				console.warn(error);
			}

			repos = [];
			repos.push('Nenhum usuário com o nome ' + username + ' foi encontrado :(');
			renderRepos();
		});
}

function getRepos() {
	var username = inputText.value;

	repos.push('Carregando...');
	renderRepos();

	getReposPromisse(username)
		.then(function(response) {
			repos = [];

			for (repo of response) {
				repos.push(repo.name);
			}

			renderRepos();
		})
		.catch(function(error) {
			console.warn(error);

			repos = [];
			repos.push('Nenhum usuário com o nome ' + username + ' foi encontrado :(');
			renderRepos();
		});

	getReposAxios(username);
}