
import './style.css';
import printMe from './print.js';

console.log('Hello')

function component() {
  const element = document.createElement('h3');
  const btn = document.createElement('button');
  element.innerHTML = 'Hello there...';
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());