
import { home, homePage } from './home.js';
import { menuNav, menuContent } from './menu.js';
import { contactNav, contactContent } from './contact.js';
import { aboutContent, aboutNav } from './about.js';
import './style.css';


const header = document.createElement('div');
const title = document.createElement('div');
const nav = document.createElement('div');
const content = document.createElement('div');

title.appendChild(homePage());
header.appendChild(title);
header.appendChild(nav);
header.classList.add('header');
content.classList.add('content');
nav.appendChild(home());
nav.appendChild(menuNav());
nav.appendChild(contactNav());
nav.appendChild(aboutNav());
document.body.appendChild(header);
document.body.appendChild(content);


const navButtons = document.querySelectorAll('button');
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonClass = button.classList;
    switch( true ) {
      case buttonClass.contains('homeNavButton'):
        content.appendChild();
        break;
      case buttonClass.contains('contactNavButton'):
        content.appendChild(contactContent());
        break;
        case buttonClass.contains('menuNavButton'):
          content.appendChild(menuContent());
          break;
      case buttonClass.contains('aboutNavButton'):
        content.appendChild(aboutContent());
        break;
    }
  })
});
