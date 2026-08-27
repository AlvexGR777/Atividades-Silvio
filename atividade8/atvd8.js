const form = window.document.querySelector("form");

form.addEventListener('submit', function(e) {
   
    e.preventDefault();

    
    const Aluno = window.document.querySelector('#aluno');
    const Nota1 = window.document.querySelector('#nota1');
    const Nota2 = window.document.querySelector('#nota2');
    const Nota3 = window.document.querySelector('#nota3');
    const situacaofinal = window.document.querySelector('#situacaofinal');

    
    const nomeAluno = Aluno.value.trim();
    const nota1 = parseInt(Nota1.value);
    const nota2 = parseInt(Nota2.value);
    const nota3 = parseInt(Nota3.value);

    
    if (/\d/.test(nomeAluno) || nomeAluno === "") {
        situacaofinal.textContent = "Por favor, digite somente letras no nome do aluno.";
        return; 
    }

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0) {
        situacaofinal.textContent = "Por favor, digite somente números maiores ou iguais a 0 nas notas.";
        return; 
    }

    
    const media = (nota1 + nota2 + nota3) / 3;

    
    if (media < 2) {
        situacaofinal.textContent = `${nomeAluno}, você foi Reprovado com média ${media.toFixed(1)}`;
    } else if (media < 4) {
        window.alert(`${nomeAluno}, você está de Exame (Média: ${media.toFixed(1)})`);
        situacaofinal.textContent = `Situação: Exame (Média ${media.toFixed(1)})`;
    } else if (media < 6) {
        window.alert("Óia, quase, Recuperação");
        situacaofinal.textContent = `Situação: Recuperação (Média ${media.toFixed(1)})`;
    } else if (media < 8) {
        window.alert("Aprovado na média pae");
        situacaofinal.textContent = `Situação: Aprovado (Média ${media.toFixed(1)})`;
    } else {
        window.alert("Você é crânio mano, fechou com chave de ouro");
        situacaofinal.textContent = `Situação: Aprovado com Excelência (Média ${media.toFixed(1)})`;
    }
});
