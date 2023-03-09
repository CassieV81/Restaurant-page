
export function menuNav() {
  const element = document.createElement('button');
  element.classList.add('menuNavButton');
  element.innerText = "Menu";

  return element;
}

export function menuContent() {
  const element = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  title.innerText = 'Menu';
  text.innerText = 'Select your choice.'
  element.append(title, text);
  element.classList.add('tabContent');

  return element;
}