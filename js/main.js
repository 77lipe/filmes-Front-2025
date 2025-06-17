'use strict'

document.addEventListener("DOMContentLoaded", function () {
    function carregarTelaAdicionar() {
        document.body.innerHTML = `
            <body>
    <header>
        <img src="./img/ChatGPT Image 29 de abr. de 2025, 11_44_23 1.png" alt="StreamFilms Logo" class="logo">
        <h1 class="titulo">streamFilms</h1>
        <img src="./img/image 1.png" alt="Perfil" class="perfil">
    </header>

      <button class="botaoVoltar" type="button" id="botaoBack">Voltar</button>

    <div class="cont">
        <div class="card-add-filme">
            <p>+ Adicionar Filme</p>
        </div>

        <div class="formulario">
            <h2>Cadastre um novo filme!!</h2>
            <form>
                <div class="coluna">
                    <label>Nome *</label>
                    <input type="text" placeholder="Nome do Filme">

                    <label>Sinopse *</label>
                    <textarea placeholder="Sinopse do filme"></textarea>

                    <label>Produtora *</label>
                    <input type="text" placeholder="Nome da produtora">

                    <label>Data de lançamento *</label>
                    <input type="date">

                    <label>Idioma *</label>
                    <input type="text" placeholder="Idioma original">

                    <label>Linguagem *</label>
                    <input type="text" placeholder="Linguagem">
                </div>

                <div class="coluna">
                    <label>Gênero *</label>
                    <input type="text" placeholder="Gênero do filme">

                    <label>Idade Indicativa *</label>
                    <input type="text" placeholder="Ex: 14 anos">

                    <label>Duração *</label>
                    <input type="text" placeholder="Ex: 2h30min">

                    <label>Capa *</label>
                    <input type="file">

                    <label>Trailer *</label>
                    <input type="url" placeholder="URL://xxxxxxxxxxxxx">

                    <div class="botoes-form">
                        <button type="reset">Resetar</button>
                        <button type="submit">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
          
        `;

        // Como recriou o botão, precisa reatribuir o evento ao botão "Voltar"
        document.getElementById("botaoBack").addEventListener("click", carregarTelaInicial);
    }

    function carregarTelaInicial() {
        document.body.innerHTML = `
            <header>
                <img src="./img/ChatGPT Image 29 de abr. de 2025, 11_44_23 1.png" alt="logo">
                <h1 class="titulo" id="streamFilms">StreamFilms</h1>
                <img class="perfil" src="./img/image 1.png" alt="perfil">
            </header>
            
            <div class="container">
                <div class="subtitle">
                    <h2 class="titleFilmes">Encontre aqui seus filmes favoritos!!</h2>
                    <button class="adicionarfilme" type="button" id="botaoAdd">+ Adicionar Filme</button>
                </div>

                <div class="meiDaTela">
                    <input type="text" id="nomeFilme" placeholder="Pesquise o que deseja ver">
                    <p class="textInput">*Na barra de pesquisa você pode pesquisar por filmes através do nome, genero ou produtora</p>
                </div>

                <main></main>
            </div>
        `;

        // Reatribuir o evento ao botão "Adicionar"
        document.getElementById("botaoAdd").addEventListener("click", carregarTelaAdicionar);
    }

    // Evento inicial ao carregar a página
    const botaoAdd = document.getElementById("botaoAdd");
    if (botaoAdd) {
        botaoAdd.addEventListener("click", carregarTelaAdicionar);
    }
});
