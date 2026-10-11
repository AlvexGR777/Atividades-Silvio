let series = [];
let listaAtual = [];

const campoBusca = document.getElementById("campoBusca");
const filtroGenero = document.getElementById("filtroGenero");
const filtroAno = document.getElementById("filtroAno");
const listaSeries = document.getElementById("listaSeries");
const categoria = document.getElementById("categoria");
const btnCarregar = document.getElementById("btnCarregar");
const btnOrdenar = document.getElementById("btnOrdenar");
const statTotal = document.getElementById("statTotal");
const statAntiga = document.getElementById("statAntiga");
const statRecente = document.getElementById("statRecente");


async function carregarSeries() {

    try {
        categoria.textContent = "Carregando séries...";
        const resposta = await fetch("series.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o JSON.");
        }

        const dados = await resposta.json();
        series = dados.series;
        listaAtual = series;
        categoria.textContent = `${series.length} séries carregadas.`;
        mostrarSeries(series);
        mostrarEstatisticas();

    } catch (erro) {

        categoria.textContent = `Erro: ${erro.message}`;
    }
}


function mostrarSeries(lista) {

    listaSeries.innerHTML = "";

    if (lista.length === 0) {
        listaSeries.innerHTML = "<p>Nenhuma série foi encontrada.</p>";
        return;
    }

    lista.forEach((serie) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${serie.imagem}" alt="${serie.titulo}">
            <p><strong>Título:</strong> ${serie.titulo}</p>
            <p><strong>Ano:</strong> ${serie.ano}</p>
            <p><strong>Gênero:</strong> ${serie.genero}</p>
            <p><strong>Quantidade de temporadas:</strong> ${serie.temporadas}</p>
        `;

        listaSeries.appendChild(card);
    });
}


function aplicarFiltros() {

    if (series.length === 0) {
        categoria.textContent = "Clique em 'Carregar séries' primeiro.";
        return;
    }

    const texto = campoBusca.value.toLowerCase();
    const genero = filtroGenero.value;
    const ano = filtroAno.value;

    const resultado = series.filter((serie) =>
        serie.titulo.toLowerCase().includes(texto) &&
        serie.genero.includes(genero) &&
        (ano === "" || serie.ano == ano)
    );

    listaAtual = resultado;
    mostrarSeries(resultado);
    categoria.textContent = `${resultado.length} séries encontradas.`;
}


function ordenarPorAno() {

    if (series.length === 0) {
        categoria.textContent = "Clique em 'Carregar séries' primeiro.";
        return;
    }

    const ordenadas = [...listaAtual].sort((a, b) => a.ano - b.ano);

    listaAtual = ordenadas;
    mostrarSeries(ordenadas);
    categoria.textContent = `${ordenadas.length} séries, da mais antiga para a mais recente.`;
}


function mostrarEstatisticas() {

    const ordenadas = [...series].sort((a, b) => a.ano - b.ano);

    const maisAntiga = ordenadas[0];
    const maisRecente = ordenadas[ordenadas.length - 1];

    statTotal.textContent = series.length;
    statAntiga.textContent = `${maisAntiga.titulo} (${maisAntiga.ano})`;
    statRecente.textContent = `${maisRecente.titulo} (${maisRecente.ano})`;
}


campoBusca.addEventListener("input", aplicarFiltros);
filtroGenero.addEventListener("change", aplicarFiltros);
filtroAno.addEventListener("change", aplicarFiltros);
btnCarregar.addEventListener("click", carregarSeries);
btnOrdenar.addEventListener("click", ordenarPorAno);