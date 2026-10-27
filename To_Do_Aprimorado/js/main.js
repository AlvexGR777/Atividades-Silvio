$(document).ready(function(){
 $("#botao").click(inserirTarefa);
  $("select").formSelect();
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();
    var campoPrioridade = $(".campoPrioridade").val();
    if (campoTitulo.trim() === "" || campoObs.trim() === "" || !campoPrioridade) {
    M.toast({html: "Preencha o título e a observação e a prioridade antes de cadastrar a tarefa."});
    return;
}
    

    var linha = funLinha(campoTitulo, campoObs, campoPrioridade);
    linha.find(".botaoDeletar").click(deletaLinha);
    linha.find(".botaoConcluir").click(concluiLinha);
    tabela.append(linha);
    $(".campoTitulo").val("");
    $(".campoObs").val("");
     $(".campoPrioridade").val("").formSelect();
    $(".campoTitulo").focus();
    M.toast({html: "Tarefa cadastrada!"});
}

function concluiLinha(e){
    e.preventDefault();
    $(this).closest("tr").toggleClass("concluida");
}

function funLinha(campoTitulo, campoObs, campoPrioridade){ // função com parametro
     var linha = $("<tr>");
     var colunaTarefa = $("<td>").text(campoTitulo);
     var colunaObs = $("<td>").text(campoObs);
     var colunaDelete = $("<td>");

     var colunaPrioridade = $("<td>").text(campoPrioridade);
var colunaConcluir = $("<td>");

var bConcluir = $("<a>").addClass("botaoConcluir").attr("href","#");
var iconeConcluir = $("<i>").addClass("material-icons").text("check");
bConcluir.append(iconeConcluir);
colunaConcluir.append(bConcluir);

     var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
     var icone = $("<i>").addClass("material-icons").text("delete");
     bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa); // anexa mais código
    linha.append(colunaObs);
    linha.append(colunaPrioridade);
    linha.append(colunaConcluir);
    linha.append(colunaDelete);

    return linha
}
 
function deletaLinha(e){
    e.preventDefault();// tira o padrão
    $(this).parent().parent().remove();
}
