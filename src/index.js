import _ from 'lodash';
import './style/a.scss';
// loader => css-loader module 解析成style-loader
import './style/index.css';
import { a, b, c } from '@/b';
import $ from 'jquery';

function createDomElement() {
  let dom = document.createElement('div');
  dom.className = 'box';
  dom.innerHTML = _.join(['aaa', 'bbb', 'ccc', '']);
  return dom;
}
document.body.appendChild(createDomElement());
// #endregion
console.log(3);

// axios.get('/api/compmsglist')
// .then((res) => {
//     console.log(res);
// })

class Temp {
  show() {
    console.log('this.Age :', this.Age);
  }
  get Age() {
    return this._age;
  }
  set Age(val) {
    this._age = val + 1;
  }
}

let t = new Temp();
t.Age = 19;

t.show();

console.log(a, b, c);

$(function() {
  console.log('jquery');
  $('.box').click(function() {
    alert(1);
  });
})
;
