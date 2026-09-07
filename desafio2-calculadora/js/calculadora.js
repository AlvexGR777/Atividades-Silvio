let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
 
let string = "";
let arr = Array.from(buttons);


        arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
    
        if(e.target.innerHTML=='=') {
            try{
    string = String(eval(string));
    input.value = string;
    catch (err) {
        ImageCapture.value = "Erro";
        string = ""
    }
}

    else if(e.target.innerHTMl == 'AC'){
        string="";
        input.value=string;
    }
 
    
    else if(e.target.innerHTML =='DEl'){
        string=String(string).substring(0, string.length-1);
        input.value=string;
    }

    
    else{
        string +=e.target.innerHTML;
        input.value=string;
    }
        
})
})

    

    






    









    




