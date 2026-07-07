import { alertTxt } from "../variables/variables.js";

let timeId;

export function mostrarAlerta(mensagem) {
  alertTxt.textContent = mensagem;
  
  clearTimeout(timeId);
  
  alertTxt.classList.add("active");
  
  navigator.vibrate?.(90);
  
  timeId = setTimeout(() => {
    alertTxt.classList.remove("active");
  }, 2000);
}