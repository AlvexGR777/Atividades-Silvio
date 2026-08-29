const form = window.document.querySelector("#formulario");
const resultadoDiv = window.document.querySelector(`#consumo`);

form.addEventListener(`submit`, function(e) {
  e.preventDefault();

  const distanciaInput = window.document.querySelector(`#distancia`);
  const combustivelInput = window.document.querySelector(`#combustivel`);

  const distancia = parseFloat(distanciaInput.value);
  const combustivel = parseFloat(combustivelInput.value);

  if (isNaN(distancia) || isNaN(combustivel) || distancia <= 0 || combustivel <= 0) {
    resultadoDiv.textContent = "Por favor, digite a distância em km e o combustível em litros e que sejam maiores que 0.";
    return;
  }

  const consumo = distancia / combustivel;

  if (consumo < 5) {
    resultadoDiv.textContent = `Consumo muito alto (${consumo.toFixed(2)} km/l)`;
  } else if (consumo >= 5 && consumo <= 8) {
    resultadoDiv.textContent = `Consumo alto (${consumo.toFixed(2)} km/l)`;
  } else if (consumo >= 8.01 && consumo <= 12) {
    resultadoDiv.textContent = `Consumo normal (${consumo.toFixed(2)} km/l)`;
  } else if (consumo >= 12.01 && consumo <= 15) {
    resultadoDiv.textContent = `Consumo bom (${consumo.toFixed(2)} km/l)`;
  } else if (consumo > 15) {
    resultadoDiv.textContent = `Consumo excelente (${consumo.toFixed(2)} km/l)`;
  }
});
