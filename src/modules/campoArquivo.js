import { nomeArquivo } from '../variables/variables.js';

export function campo() {
  if (arquivo.files.length > 0) {
    nomeArquivo.textContent = arquivo.files[0].name;
  } else {
    nomeArquivo.textContent = "Nenhum arquivo selecionado";
  }
}