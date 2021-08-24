import { getTriangleArea } from './myMathModule.js';
export let fun = (n) => getTriangleArea(n, Math.round(Math.pow(n, 2) / 2));
console.log(fun(5))