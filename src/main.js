import api from './api.js';

class App{

    //Método construtor
    constructor(){

        //Lista de repositórios
        this.repositorios = [];

        //form
        this.formulario = document.querySelector('#formulario1');

        //lista
        this.lista = document.querySelector('.list-group');

        //Método para registrar os evento do form
        this.registrarEventos();

    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
        
    }

    async adicionarRepositorio(evento){
        
        //evita que o form recarregue a página
        evento.preventDefault();

        //recuperar o valor do input
        let input = this.formulario.querySelector('#repositorio').value;

        //se o input estiver vazio, retorna
        if(input.length === 0){
            return;
        }

        let response = await api.get(`/repos/${input}`);
        //console.log(response);

        let { name, description, html_url, owner: { avatar_url} } = response.data;

        //adiciona o repositório na lista
        this.repositorios.push({
            nome: name,
            descricao: description,
            avatar_url,
            //link
            link: html_url
            
        });

        //renderiza a tela
        this.renderizarTela();
                                                                                
    }

    renderizarTela(){
        //limpar conteúdo da lista
        this.lista.innerHTML ='';

        //percorre toda a lista de repositórios e cria os elementos
        this.repositorios.forEach(rep => {

            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');

            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', rep.avatar_url);
            //adicionando img como filho de li
            li.appendChild(img);

            //<strong>
            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(rep.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            //<p>
            let p = document.createElement('p');
            let txtDesc = document.createTextNode(rep.descricao);
            p.appendChild(txtDesc);
            li.appendChild(p);

            //<a>
            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', rep.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);

            //adicionando li como filho da ul
            this.lista.appendChild(li);

            //limpar conteúdo do input
            this.formulario.querySelector('#repositorio').value = '';

            //adiciona o foco no input
            this.formulario.querySelector('#repositorio').focus();
        })
    }

}

new App();