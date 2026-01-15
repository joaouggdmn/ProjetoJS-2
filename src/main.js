class App{

    //Método construtor
    constructor(){

        //Lista de repositórios
        this.repositorios = [];

        //form
        this.formulario = document.querySelector('#formulario1');

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
        console.log(this.repositorios);
    }

}

new App();