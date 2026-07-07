import { gerarJson } from './src/modules/gerarJson.js';
import { btn } from './src/variables/variables.js';
import { campo } from './src/modules/campoArquivo.js';
import { arquivo } from './src/variables/variables.js';

arquivo.addEventListener('change', () => {
    campo()
});


btn.addEventListener('click', gerarJson)