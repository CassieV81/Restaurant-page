

export function aboutNav() {
  const element = document.createElement('button');
  element.classList.add('aboutNavButton');
  element.innerText = "About";

  return element;
}

export function aboutContent() {
  const element = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  title.innerText = 'About Us';
  text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla. At auctor urna nunc id cursus metus aliquam eleifend. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Erat velit scelerisque in dictum non consectetur.'
  element.append(title, text);
  element.classList.add('tabContent');

  return element;
}