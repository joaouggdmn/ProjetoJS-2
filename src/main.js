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

    adicionarRepositorio(evento){
        
        //evita que o form recarregue a página
        evento.preventDefault();

        //adiciona o repositório na lista
        this.repositorios.push({
            nome: "Curso JavaScript",
            descricao: "Descrição do repositório",
            avatar_url: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
            //link

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