const form = window.document.querySelector("#formulario");
const resultadoDiv = window.document.querySelector(`#resultadoDiv`);
 
 
 form.addEventListener(`submit`, function(e) {
   e.preventDefault();

    const distanciaInput = window.document.querySelector(`#distancia`);
    const combustivelInput = window.document.querySelector(`#combustivel`);
   

    const distancia = parseFloat(distanciaInput.value);
    const combustivel = parseFloat(combustivelInput.value);

     
    
    if (isNaN(distancia) || isNaN(combustivel) || distancia <= 0 || combustivel <=0) {
        resultadoDiv.textContent = "Por favor, digite a distância em km e o combustível em litros e que sejam maiores que 0.";
        return; 
    }

    
     const consumo = distancia/combustivel;

    
    if ( consumo < 5) {
        resultadoDiv.textContent = `Seu Consumo está  muito alto em parça! (${consumo.toFixed(2)} km/l)`;
    
    } else if (consumo >=5 && consumo<=8) {
        window.alert(`Vamo dimiuir o consumo? Tá alto (Consumo: ${consumo.toFixed(2)})`);
        resultadoDiv.textContent = "Alto consumo  ${resulatdoDiv.toFixed(2)})";
    
    } else if (consumo >= 8.01 && consumo<=12) {
        window.alert("Tá nos conformes, normalizado,relaxa");
        resultadoDiv.textContent = `Consumo normal (Consumo: ${consumo.toFixed(2)})`;
   
    } else if (consumo >=12.01 && consumo<=15) {
        window.alert("Tá consumindo bem mano");
        resultadoDiv.textContent = `Consumo bom (Consumo: ${consumo.toFixed(2)})`;
    
    } else if (consumo > 15) {
        window.alert("Seloco tá roncando pae");
        resultadoDiv.textContent = `Consumo excelente (Consumo: ${consumo.toFixed(2)})`;
    }
    });


