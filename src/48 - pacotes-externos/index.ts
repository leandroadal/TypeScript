/**
 * precisa de um pacote @types/package
 *
 * Ex. além de npm i loadash
 * npm i --save-dev @types/lodash
 */

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('luiz@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
