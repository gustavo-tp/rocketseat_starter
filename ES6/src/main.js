class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Gustavo';
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = () => {
//     MinhaLista.add('Novo todo');
// }

MinhaLista.mostraUsuario();

console.log(Matematica.soma(1, 2));

const usuario = { nome: 'Gustavo' };

usuario.nome = 'Cleiton'; // Mutação

console.log(usuario);

function teste(x) {
    let y = 2; // variável de escopo

    if (x > 5) {
        let y = 4;

        console.log(x, y);
    }
}

teste(10);

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((item, index) => item + index);

console.log(newArr);

const sum = arr.reduce((total, next) => total + next);

console.log(sum);

const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

const find = arr.find(item => item === 4);

console.log(find);

const testeObj = () => ({ nome: 'Gustavo' }); // Parêntesis necessário para retornar objeto

console.log(testeObj());

const soma = (a = 3, b = 6) => a + b; // Define valores padrão

console.log(soma(1));
console.log(soma());

const usuarioTest = {
    nome: 'Gustavo',
    idade: 21,
    endereco: {
        cidade: 'Ponta Grossa',
        estado: 'PR'
    }
};

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuarioTest);

const { nome, idade, endereco: { cidade } } = usuarioTest;

console.log(nome);
console.log(idade);
console.log(cidade);

// REST

const usuarioD = {
    nomeD: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nomeD, ...resto } = usuarioD;

console.log(nome, resto);

const arrD = [1, 2, 3, 4];

const [ a, b, ...c ] = arrD;

console.log(a, b, c);

function soma2(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma2(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const usuario2 = { ...usuario1, nome: 'Gustavo' };

console.log(usuario2);

const nomeG = 'Gustavo';
const idadeG = 23;

const usuarioG = {
    nomeG,
    idadeG,
    empresa: 'WebTools'
};

console.log(usuarioG);

import somaTeste, { sub as subtract } from './funcoes';

console.log(somaTeste(1, 2));
console.log(subtract(4, 2));

import somaFunction from './soma'

console.log(somaFunction(20, 25));

import * as funcoes from './funcoes';

console.log(funcoes.sub(10, 9));

import ClasseUsuario, { idade as IdadeUsuario } from './functions';

ClasseUsuario.info();
console.log(IdadeUsuario);

const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

//minhaPromisse().then(response => { console.log(response); });

async function executaPromisse() {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

const executaPromisse2 = async () => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromisse();
executaPromisse2();

import axios from 'axios';

class Api {
    static async getUserFromGithub(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Usuário não existe');
        }
    }
}

//Api.getUserFromGithub('gustavo-tp');
//Api.getUserFromGithub('gustavo-tpasa');

//const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const delay = (sec) => new Promise(resolve => setTimeout(() => {
    resolve(`${sec}s`);
}, 1000));

async function umPorSegundo() {
    console.log(await delay(1));
    console.log(await delay(2));
    console.log(await delay(3));
}

umPorSegundo();

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`http://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (err) {
            console.warn('Repositório não existe');
        }
    }
}

//Github.getRepositories('rocketseat/rocketseat.com.br');
//Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
};

//buscaUsuario('diego3g');
//buscaUsuario('rocketseat');

import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading(true);

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch (error) {
            alert('O repositório não existe!');   
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();