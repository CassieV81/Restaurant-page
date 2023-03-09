import print from './home.js';
import menuNav from './menu.js';
import contactNav from './contact.js';
import aboutNav from './about.js';
import './style.css';


const content = document.createElement('div');
content.classList.add('header');
content.appendChild(print());
content.appendChild(menuNav());
content.appendChild(contactNav());
content.appendChild(aboutNav());
document.body.appendChild(content);
