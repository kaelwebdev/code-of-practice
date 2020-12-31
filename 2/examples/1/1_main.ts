/**
 * main module
 * Description: using singleton pattern example
 * route: ./examples/1_main.ts
 */
import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B?', a === b);
