

export function contactNav() {
  const element = document.createElement('button');
  element.classList.add('contactNavButton');
  element.innerText = "Contact";

  return element;
}

export function contactContent() {
  const element = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  title.innerText = 'Contact';
  text.innerText = 'Get in touch, or swing by for a cup of coffee.'
  element.append(title, text);
  element.classList.add('tabContent');

  return element;
}