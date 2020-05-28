// TODO: write your code here
import sortObjProp from './func';

console.log('worked');

const data = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const rules = ['name', 'level'];

console.log(sortObjProp(data, rules));
