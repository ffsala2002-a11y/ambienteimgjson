import { alertTxt, status, input } from '../variables/variables.js';
import { converterParaJson } from './converterParaJson.js';
import { baixarArquivo } from './baixarArquivo.js';
import { mostrarAlerta } from './mostrarAlerta.js';

let timeId;

export function gerarJson() {
  const file = input.files[0];
  
  if (!file) {
    mostrarAlerta("Selecione um arquivo TXT")
    return
  };
  
  if (!file.name.endsWith(".txt")) {
    mostrarAlerta("Erro: selecione um arquivo .txt")
    return
  };
  
  const reader = new FileReader();
  
  reader.onload = ({ target }) => {
    const json = converterParaJson(target.result);
    
    baixarArquivo(
      JSON.stringify(json, null, 2),
      "imagens.json",
      "application/json"
    );
    
    status.textContent = "imagens.json gerado com sucesso!";
  };
  
  reader.readAsText(file);
}