let filmes = [];
 
const listaFilmes = document.getElementById("listaFilmes");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");
 
async function carregarFilmes() {
 
    try {
        status.textContent = "Carregando os Filmes...";
        const resposta = await fetch("./filmes.json");
 
        if (!resposta.ok) {
            throw new Error(
                "Não foi possível carregar os filmes."
            );
        }
 
        filmes = await resposta.json();
 
    } catch (erro) {
 
        status.textContent = `Erro: ${erro.message}`;
    }
}
 
function mostrarFilmes(lista) {
 
    listaFilmes.innerHTML = "";
 
    lista.forEach((filmes) => {
 
        const card = document.createElement("div");
 
        card.classList.add("card");
 
        card.innerHTML = `
            <h2>${filmes.nome}</h2>
            <p><strong>Sinopse:</strong> ${filmes.sinopse}</p>
            <p><strong>Categoria:</strong> ${filmes.categoria}</p>
            <p><strong>Nota no IMDB:</strong> ${filmes.notanoIMDB}</p>
        `;
 
        listaFilmes.appendChild(card);
    });
}
 
btnBuscar.addEventListener("click", () => {
            status.textContent = `${filmes.length} filmes carregados.`;
        mostrarFilmes(filmes);
});
 
carregarFilmes();