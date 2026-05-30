// Adicionar "allowJs": true, no tsconfig

import { soma } from './module.js';

const result = soma(10, 20) as number;
console.log(result);
