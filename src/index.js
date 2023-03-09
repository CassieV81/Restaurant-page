import print from './home.js';
import menuNav from './menu.js';
import contactNav from './contact.js';
import aboutNav from './about.js';
import './style.css';


const header = document.createElement('div');
const title = document.createElement('div');
const nav = document.createElement('div');
header.appendChild(title);
header.appendChild(nav);
header.classList.add('header');
title.appendChild(print());
nav.appendChild(menuNav());
nav.appendChild(contactNav());
nav.appendChild(aboutNav());
document.body.appendChild(header);
