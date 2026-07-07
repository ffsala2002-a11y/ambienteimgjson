import { criarUrls } from './criarUrls.js';


export function converterParaJson(texto) {
  const json = {};
  
  texto
    .split(/\r?\n/)
    .forEach((linha) => {
      if (!linha.startsWith("*")) return;
      
      const match = linha.match(/\b\d{5,6}\b/);
      if (!match) return;
      
      const id = match[0];
      
      json[id] = criarUrls(id);
    });
  
  return json;
}