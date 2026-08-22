const form = window.document.querySelector("form")
form.addEventListener('submit', function(e),'aluno', 'notas','notas2','notas3',{
    let aluno = window.document.querySelector('#aluno');
    const aluno="";

    let notas1 = window.document.querySelector('#notas1');
    const notas1="";
     

    let notas2= window.document.querySelector('#notas2');
    const nota2="";
   

    let notas3 = window.document.querySelector('#notas3');
    const notas3="";
    

    let media = window.document.querySelector('#media');
    const media = (notas1 + notas2 + notas3)/3
    
    
    const situacaofinal = window.document.querySelector('#situacaofinal');
    let situacaofinal= media;


    e.preventDefault();

    aluno = (aluno.text);
    notas1 = parseInt(notas.value);
     notas2 = parseInt(notas.value);
      notas3 = parseInt(notas.value);
    media= parseInt(media.value);
     media = (notas1 + notas2 + notas3)/3

if(isNaN(aluno)){
            situacaofinal.textContent = "Por favor, digite somente letras em seu nome";}

            
if(isNaN(notas1) || isNaN(notas2) ||isNaN(notas3)){
            situacaofinal.textContent = "Por favor, digite somente números maiores que 0";
    
    }else{
        situacaofinal= media
        

        if(media < 2){
             situacaofinal.textContent = ` Reprovado ${media} `;

        }else if(media < 4){
            window.alert("Você está de Exame");
        
        }else if(media < 6){
            window.alert("Óia, quase, Recuperação");

        }else if(media< 8){
            window.alert("Aprovado na média pae");  
            
        }else{
            window.alert("Você é crãnio mano, fechou com chave de ouro");    
        }
    }       
})                
                
        


     


