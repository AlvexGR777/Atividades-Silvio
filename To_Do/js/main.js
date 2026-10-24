$(function(){
 $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();

    var linha = funLinha(campoTitulo, campoObs);
    linha.find(".botaoDeletar").click(deletaLinha);
    tabela.append(linha);
}

function funLinha(campoTitulo, campoObs){ // função com parametro
     var linha = $("<tr>");
     var colunaTarefa = $("<td>").text(campoTitulo);
     var colunaObs = $("<td>").text(campoObs);
     var colunaDelete = $("<td>");

     var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
     var icone = $("<i>").addClass("material-icons").text("delete");
     bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa); // anexa mais código
    linha.append(colunaObs);
    linha.append(colunaDelete);

    return linha
}

function deletaLinha(){
    event.preventDefault();// tira o padrão
    $(this).parent().parent().remove();
}

